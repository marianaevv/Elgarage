import React from "react";
import { Row, Col, Image } from 'react-bootstrap';

import BombasAgua from "./assets/bombasAgua.jpg";
import ABS from "./assets/ABS.jpg";
import CambiosAceite from "./assets/cambiosAceite.jpg";
import Frenos from "./assets/frenos.jpg";
import FugasAceite from "./assets/fugasAceite.jpg";
import SistemaElectrico from "./assets/sistemaElectrico.png";
import SistemaCarga from "./assets/sistemasCarga.jpg";
import FuelInjection from "./assets/fuelInjection.jpg";
import diagnostico from "./assets/diagnosticoPorComp.jpg";
import Suspension from "./assets/suspension.jpg";
import afinacion from "./assets/afinacion.jpg";
import aire from "./assets/aire.jpeg";
import calefaccion from "./assets/calefaccion.jpg";
import fugasrefrigerante from "./assets/fugasrefrigerante.jpg";
import ponchaduras from "./assets/ponchaduras.jpg";
import sistemaenfriamiento from "./assets/sistemaenfriamiento.jpg";
import vibraciones from "./assets/vibraciones.jpg";
import checkEngine from "./assets/checkEngine.jpg";
import bombasgasolina from "./assets/bombasgasolina.png";

import "./css/Servicios.css";

const blocks = [
  { label: 'Bombas de agua', img: BombasAgua},
  { label: 'Frenos', img: Frenos},
  { label: 'ABS', img: ABS},
  { label: 'Cambios de Aceite', img: CambiosAceite},
  { label: 'Fugas de Aceite', img: FugasAceite},
  { label: 'Sistema Electrico', img: SistemaElectrico},
  { label: 'Sistema de carga', img: SistemaCarga},
  { label: 'Fuel Injection', img: FuelInjection},
  { label: 'Diagnóstico por computadora', img: diagnostico},
  { label: 'Suspensión', img: Suspension},
  { label: 'Check Engine', img: checkEngine},
  { label: 'Afinación', img: afinacion},
  { label: 'Vibraciones o Ruidos', img: vibraciones},
  { label: 'Aire Acondicionado', img: aire},
  { label: 'Calefacción', img: calefaccion},
  { label: 'Sistema de Enfriamiento', img: sistemaenfriamiento},
  { label: 'Fugas de refrigerante', img: fugasrefrigerante},
  { label: 'Ponchaduras', img: ponchaduras},
  { label: 'Bombas de gasolina', img: bombasgasolina }
]

const Servicios = () => (
  <body>
    <h1 className='titleServicios'>SERVICIOS</h1>
    <div className="container py-5">
      <Row className="text-center">
        {blocks.map(({ label, img }, i) => (
          <Col key={i} sm={6} xl={4} className="mb-5">
            <div className="bg-white rounded shadow-sm px-4 py-5">
              <Image className="imgServicio" src={img} roundedCircle/>
              <h5 className="mb-0 serv">{label}</h5>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  </body>
)

export default Servicios;
