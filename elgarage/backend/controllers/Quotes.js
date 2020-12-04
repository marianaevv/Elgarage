const app = require("../app");
const quotesModel = require("../models/Quotes");

const getAllQuotes = async function (req, res) {
  const quotes = await quotesModel.find({});
  return res.status(200).send({
    quotes
  })
};

const newQuote = async function (req, res) {
  const quote = new quotesModel();
  quote.nombre = req.body.nombre;
  quote.correo = req.body.correo;
  quote.telefono = req.body.telefono;
  quote.placas = req.body.placas;
  quote.marcaauto = req.body.marcaauto;
  quote.añoauto = req.body.añoauto;
  quote.kilometraje = req.body.kilometraje;
  quote.tamañomotor = req.body.tamañomotor;
  quote.servicio = req.body.servicio;
  quote.otro = req.body.otro;
  try {
    await quote.save();
    return res.status(201).send(quote);
  } catch (err) {
    return res.status(500).send(err);
  }
};

module.exports = {
  getAllQuotes: getAllQuotes,
  newQuote: newQuote,
};