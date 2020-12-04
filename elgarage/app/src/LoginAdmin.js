import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './css/LoginAdmin.css';

import { isLoggedIn } from './components/Util/Auth';

const Login = () => {
  if(isLoggedIn()){
    window.location.href = "/";
    return(
        <p></p>
    );
}
function userLoginFetch( email, password ){
  //cambiar por link final del api de login en el deplyment
  let url = '/api/users/login';

  let data = {
    email,
    password
  }

  let settings = {
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify( data )
  }

  fetch( url, settings )
    .then( response => {
      if( response.ok ){
        return response.json();
      }

      throw new Error( response.statusText );
    })
    .then( responseJSON => {
      localStorage.setItem( 'token', responseJSON.token );
      window.location.href = "/admin/citas";
    })
    .catch( err => {
      alert("Something happend,Try again");
      console.log(err);
    });
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const email = form.querySelector('#formBasicEmail');
    const password = form.querySelector('#formBasicPassword');
    event.preventDefault();
    event.stopPropagation();

    userLoginFetch(email.value,password.value);
  };

  return (
    <div className="login-page">
      <Container fluid>
        <Row>
          <Col>
            <h1 className="display-4 font-weight-bold login-titulo">EL GARAGE</h1>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={5} md={7} className="login-box">
            <h3 className="login-text">Bienvenido, por favor inicie sesión</h3>
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label><b>Nombre de Usuario</b><span className="login-require"><b>*</b></span></Form.Label>
                <Form.Control type="email" placeholder="Usuario" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label><b>Contraseña</b><span className="login-require"><b>*</b></span></Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Button variant="primary" type="submit" className="login-button">
                <b>Iniciar Sesion</b>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
