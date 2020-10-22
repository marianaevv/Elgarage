
import React from 'react';
import Container from 'react-bootstrap/Container';

import './Inicio.css';
import redCarImg from './assets/carroRojo.png';
import whiteCarImg from './assets/carroB.png';
import logo from './assets/Logo.png';

const Inicio = () => (
  <Container fluid className='d-flex justify-content-center align-items-center position-relative' style={{ height: 'calc(100vh - 60px)' }}>
    <img src={redCarImg} alt='Red car' className='top-left'/>
    <img src={logo} alt='Red car' className=''/>
    
    <img src={whiteCarImg} alt='White car' className='bottom-right'/>
  </Container>
);

export default Inicio;
