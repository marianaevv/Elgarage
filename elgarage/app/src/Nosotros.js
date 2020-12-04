import React from 'react';
import {Jumbotron,Container,Row,Col,Image} from 'react-bootstrap';

import img1 from './assets/nosotros1.jpg';
import logo from './assets/Logo.png';
import './css/Nosotros.css';

const Nosotros = () => (
  <div className="App">
    <Jumbotron className="jumbo" fluid>
      <h1 className="jumbo-text">NOSOTROS</h1>
    </Jumbotron>
    <Container style={{marginTop : 20}}>
      <Row>
        <Col>
          <div>
            <Image className="nosotros-img" src={img1} fluid rounded  />
            <h4 className="nosotros-text">En nuestro taller mecánico “El Garage” estamos comprometidos en brindarle un servicio de la más alta calidad y con las mejores condiciones de servicio y precio. La atención personalizada y el profesionalismo de nuestro equipo nos permite trabajar dia a día para ofrecer a nuestros clientes el mejor servicio integral automotriz.</h4>
          </div>
        </Col>
        <Col>
          <ul className="listaNosotros" style={{marginBottom : 50}}>
          <li><h3 className="valores"> Nuestros Valores</h3></li>
            <li><h4>Honestidad.</h4></li>
            <li><h4>Confianza.</h4></li>
            <li><h4>Calidad.</h4></li>
            <li><h4>Responsabilidad.</h4></li>
            <li><h4>Respeto.</h4></li>
            <li><h4>Servicio.</h4></li>
          </ul>
          <Image className="nosotros-img logoNosotros" src={logo} fluid rounded />
        </Col>
      </Row>
    </Container>
  </div>
)

export default Nosotros;
