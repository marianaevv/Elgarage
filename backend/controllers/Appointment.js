const app = require("../app");
const citasModel = require("../models/Appointment");

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
    return res.status(201).send(appointment);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = {
  getAllAppointments: getAllAppointments,
  newAppointment: newAppointment,
};