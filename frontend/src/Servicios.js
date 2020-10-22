import React from "react";

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
import Image from "react-bootstrap/Image";

import "./Servicios.css";

function Servicios() {
  return (
    <body className="bod">
      <div class="container py-5">
        <div class="row text-center">
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={BombasAgua} className="imgServicio" rounded />
              <h5 class="mb-0">Bombas de agua</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Frenos</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={ABS} className="imgServicio" rounded />
              <h5 class="mb-0">ABS</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={CambiosAceite} className="imgServicio" rounded />
              <h5 class="mb-0">Cambios de Aceite</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={FugasAceite} className="imgServicio" rounded />
              <h5 class="mb-0">Fugas de Aceite</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={SistemaElectrico} className="imgServicio" rounded />
              <h5 class="mb-0">Sistema Electrico</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={SistemaCarga} className="imgServicio" rounded />
              <h5 class="mb-0">Sistema de carga</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={FuelInjection} className="imgServicio" rounded />
              <h5 class="mb-0">Fuel Injection</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={diagnostico} className="imgServicio" rounded />
              <h5 class="mb-0">Diagnóstico por computadora</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Suspension} className="imgServicio" rounded />
              <h5 class="mb-0">Suspensión</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Check Engine</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Afinación</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Vibraciones o Ruidos</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Aire Acondicionado</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Calefacción</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Sistema de Enfriamiento</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Fugas de refrigerante</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Ponchaduras</h5>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <Image src={Frenos} className="imgServicio" rounded />
              <h5 class="mb-0">Bombas de gasolina</h5>
            </div>
          </div>
        </div>
      </div>
    </body>

  );
}

export default Servicios;
