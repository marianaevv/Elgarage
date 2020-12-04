const app = require("../app");
const citasModel = require("../models/Appointment");
const {OUTEMAIL} = require("../config")
const {mailAppointment,mailConfirmAppointment} = require("../util/MailMaker")

const getAllAppointments = async function (req, res) {
  const citas = await citasModel.find({});
  return res.status(200).send({
    citas
  })
};

const newAppointment = async function (req, res) {
  const appointment = new citasModel();
  appointment.nombre = req.body.nombre;
  appointment.correo = req.body.correo;
  appointment.telefono = req.body.telefono;
  appointment.placas = req.body.placas;
  appointment.fecha = req.body.fecha;
  appointment.hora = req.body.hora;
  appointment.descripcion = req.body.descripcion;
  try {
    await appointment.save();
    await  mailAppointment(req.body.nombre,req.body.correo,req.body.telefono,req.body.placas,req.body.fecha,req.body.hora,req.body.descripcion)
    await  mailAppointment(req.body.nombre,OUTEMAIL,req.body.telefono,req.body.placas,req.body.fecha,req.body.hora,req.body.descripcion)
    return res.status(201).send(appointment);
  } catch (err) {
    return res.status(500).send(err);
  }
};
const confirmAppointment = async function (req, res) {
  try{
    await citasModel.findOneAndUpdate({'id': req.body.id },{'confirm': true},function(err, doc) {

      if (err) return res.status(500).send(err);
  })
  await mailConfirmAppointment(req.body.nombre,req.body.correo,req.body.telefono,req.body.placas,req.body.fecha,req.body.hora,req.body.descripcion)
  return res.status(200).send("Se confirmo la cita")
  } catch (err) {
    console.log(err)
    return res.status(500).send(err);
  }
  
}

module.exports = {
  getAllAppointments: getAllAppointments,
  newAppointment: newAppointment,
  confirmAppointment: confirmAppointment
};