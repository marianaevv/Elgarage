const mongoose = require("mongoose");
const uuid = require("uuid");

const quoteSchema = new mongoose.Schema({
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
  marcaauto: {
    type: String,
    required: true,
  },
  añoauto: {
    type: String,
    required: true,
  },
  kilometraje: {
    type: String,
    required: true,
  },
  tamañomotor: {
    type: String,
    required: true,
  },
  servicio: {
    type: String,
    required: true,
  },
  otro: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
});

const quoteModel = mongoose.model("Quotes", quoteSchema);

module.exports = quoteModel;