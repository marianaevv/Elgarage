const express = require("express");
const bodyParcer = require('body-parser');
const router = express.Router();
const appointment = require("../controllers/Appointment");

const quote = require("../controllers/Quotes");

router.get("/hello", (req, res) => {});

const user = require("../controllers/UsersController");
const jsonParser = bodyParcer.json();
router.get("/api/hello", (req, res) => {
  res.status(200).send("Hello World!");
});

router.get("/api/citas", async (req, res) => {
  await appointment.getAllAppointments(req, res);
});

router.post("/api/citas", async (req, res) => {
  await appointment.newAppointment(req, res);
});
router.get("/cotizaciones", async (req, res) => {
  await quote.getAllQuotes(req, res);
});

router.post("/cotizacion", async (req, res) => {
  await quote.newQuote(req, res);
});

//Rutas de autenticacion
router.post( '/api/users/login', jsonParser, async ( req, res ) => {
  await user.UserLogin(req,res);
});
router.post('/api/users/signUp', jsonParser, async (req,res) => {
  await user.UserSignUp(req,res);
});
//La ruta no existe
router.get("*", function (req, res) {
  res.status(404).send("La ruta no existe");
});


module.exports = router;