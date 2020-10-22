import React from 'react';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CitasAdmin.css'
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table'
function App() {
  return (
    <div className="App">
      <Container fluid style={{marginTop: 20}}>
        <Row>
        <Col md={4}>
          <h1 className="display-4 font-weight-bold titulo-dashboard">EL GARAGE</h1>
        </Col>
        <Col md={{ span: 4, offset: 4 }}>
          <h1 className="display-4 font-weight-bold cita-dashboard">CITAS</h1>
        </Col>
        </Row>
        <Row>
        <Col md={6} style={{marginTop : 50}}>
          <Form>
            <Row>
              <Col md="auto" >
                <h3 className="cita-dashboard">Buscar</h3>
              </Col>
              <Col md="5">
                <Form.Control></Form.Control>
              </Col>
            </Row>
          </Form>
        </Col>
        </Row>

        <Table striped bordered hover responsive style={{marginTop: 10}}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Placas</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Descripción de la falla o servicio</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
