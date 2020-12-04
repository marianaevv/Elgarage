import React from 'react';
import { Container, Jumbotron, Row, Col } from 'react-bootstrap';

import logo from './assets/Logo.png';
import './css/Inicio.css';

const Inicio = () => (
  <div>
    <Jumbotron fluid className="inicio-jumbo">
      <Container fluid className='d-flex justify-content-center align-items-center' >
        <img src={logo} alt='Logo' className='logo'/>
      </Container>
    </Jumbotron>
    <Row sm={1} md={2}>
      <Col className="bg-white">
        <div className="text-black d-md-flex align-items-center h-md-100 p-5 text-center justify-content-center">
          <div className="logoarea pt-5 pb-5">
            <h1>VISITANOS</h1>
          </div>
        </div>
      </Col>
      <Col className="bg-almost-black">
        <div className="text-white d-md-flex align-items-center  p-5 text-center justify-content-center">
          <div className="logoarea pt-5 pb-5">
            <h3>Calle Venice 9705 Chihuahua,Chihuahua Tel.6251513775</h3>
            <div className="map-responsive" >
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.869526589471!2d-106.01359948459186!3d28.663625089423153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea451f4be48991%3A0x9b2356d96f1aef45!2sVenice%2C%20California%20Etapa%20I%2C%20Chihuahua%2C%20Chih.!5e0!3m2!1ses!2smx!4v1602451739328!5m2!1ses!2smx" width="600" height="550" frameborder="0" style={{border: 0}} allowfullscreen="" aria-hidden="false" tabindex="0" title='map'></iframe>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
);

export default Inicio;
