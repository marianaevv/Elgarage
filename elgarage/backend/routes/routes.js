const express = require("express");
const bodyParcer = require('body-parser');
const path = require('path');
const router = express.Router();
const appointment = require("../controllers/Appointment");
const slot = require("../controllers/Slot");
const quote = require("../controllers/Quotes");
const contacto = require('../controllers/Contacto')

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Servicios', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Citas', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Cotizacion', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Contacto', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/Nosotros', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});
router.get('/admin/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

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
router.post("/api/citas/confirmar", async (req,res) =>{
  await appointment.confirmAppointment(req,res);
});
router.get("/api/cotizaciones", async (req, res) => {
  await quote.getAllQuotes(req, res);
});

router.post("/api/cotizacion", async (req, res) => {
  await quote.newQuote(req, res);
});
router.get("/api/slots", async (req, res) => {
  await slot.getAllSlots(req, res);
});
router.post("/api/newSlot", async (req, res) => {
  await slot.newSlot(req, res);
});
router.get("/api/slotsPorDia/:dia", async (req, res) => {
  await slot.getSlotByDay(req.params.dia, res);
});
router.delete("/api/deleteSlot/:id", async (req, res)=>{
    await slot.deleteSlotByDayHour(req.params.id, res);
})
router.post("/api/contacto",async (req,res)=>{
  await contacto.sendMail(req,res)
})

//Rutas de autenticacion
router.post( '/api/users/login', jsonParser, async ( req, res ) => {
  await user.UserLogin(req,res);
});
router.post('/api/users/signUp', jsonParser, async (req,res) => {
  await user.UserSignUp(req,res);
});
//La ruta no existe
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


module.exports = router;