const mongoose = require("mongoose");
const uuid = require("uuid");

const appointmentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    default: uuid.v4,
    unique: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  placas: {
    type: String,
    required: true,
  },
  fecha: {
    type: String,
    required: true,
  },
  hora: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const appointmentModel = mongoose.model("Appointment", appointmentSchema);

module.exports = appointmentModel;