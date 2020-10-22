import React from "react";

import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import logo from '../assets/Logo.png';
import "./css/Navigation.css";
import {isLoggedIn,LogOut} from './Util/Auth';

function Navigation() {
  let navItems=[];
  if(isLoggedIn()){
    navItems.push(
        <>
        <Nav.Link className="NavItem" href="/admin/citas">VER CITAS</Nav.Link>
        <Nav.Link className="NavItem" href="/admin/cotizaciones">VER COTIZACIONES</Nav.Link>
        </>
    )
    navItems.push(
        <span>
        <Button variant="danger" style={{margin: '10px'}} onClick={LogOut}>Cerrar Sesion</Button>
        </span>
    )
  }
  return (

    
    <header className="header sticky-top">
      
      <NavBar expand="lg" variant="dark" className="navBar">
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="navbarSupportedContent">
        <img src={logo} alt='Red car' width="500" height="500"/>
          <Nav className="ml-auto">
          
            <Nav.Link className="NavItem" href="/">INICIO</Nav.Link>
            <Nav.Link className="NavItem" href="/servicios">SERVICIOS</Nav.Link>
            <Nav.Link className="NavItem" href="/citas">CITAS</Nav.Link>
            <Nav.Link className="NavItem" href="/cotizacion">COTIZACIÓN</Nav.Link>
            <Nav.Link className="NavItem" href="/contacto">CONTACTO</Nav.Link>
            <Nav.Link className="NavItem" href="/nosotros">NOSOTROS</Nav.Link>
            {navItems}
          </Nav>
        </NavBar.Collapse>
      </NavBar>
    </header>

  );
}
export default Navigation;
