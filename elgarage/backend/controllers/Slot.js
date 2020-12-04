const app = require("../app");
const slotModel = require("../models/Slots");

const getAllSlots = async function (req, res) {
  const slots = await slotModel.find({});
  return res.status(200).send({
    slots
  })
};
const getSlotByDay = async function (diaSent, res) {
    const diaParam = diaSent;
    const slots = await slotModel.find({ dia: diaParam});
    try{
        if(slots){
           return res.status(200).send({
                slots
        }) 
        }else{
            return res.status(404).send({
                error:`No se encontraron slots disponibles`
            });
        }
    }catch(err){
        return res.status(500).send(err);
    }
  };

const newSlot = async function (req, res) {
  const slot = new slotModel();
  slot.dia = req.body.dia;
  slot.hora = req.body.hora;
  try {
    await slot.save();
    return res.status(201).send(slot);
  } catch (err) {
    return res.status(500).send(err);
  }
};

const deleteSlotByDayHour = async function (id, res) {
    const idParam = id;
    const query = await slotModel.findOne({
      id: idParam,
    });
    try {
      await slotModel.deleteOne(query);
      return res.status(200).send("SUCCES");
    } catch (err) {
      res.status(500).send(err);
    }
  };
module.exports = {
  getAllSlots: getAllSlots,
  getSlotByDay: getSlotByDay,
  deleteSlotByDayHour: deleteSlotByDayHour,
  newSlot: newSlot,
};