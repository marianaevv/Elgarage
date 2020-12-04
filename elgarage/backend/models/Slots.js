const mongoose = require("mongoose");
const uuid = require("uuid");

const slotsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuid.v4,
    unique: true,
  },
  dia: {
    type: Date,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  }, 
});

const slotModel = mongoose.model("Slot", slotsSchema);

module.exports = slotModel;