import React from "react";
import { Link } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import NavBar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';

import { isLoggedIn, LogOut } from './Util/Auth';
import logo from '../assets/Logo.png';
import "../css/Navigation.css";

const Navigation = () => (
  <header className="header sticky-top">
    <NavBar expand="lg" variant="dark" className="navBar">
      <NavBar.Toggle aria-controls="basic-navbar-nav" />
      <NavBar.Collapse id="navbarSupportedContent">
        <div className="div-imagen">
          <img src={logo} alt='Red car' width="130" height="65" className="nav-mobil"/>
        </div>
        <Nav className="ml-auto align-items-center">
          <Link className="NavItem nav-link" to="/">INICIO</Link>
          <Link className="NavItem nav-link" to="/servicios">SERVICIOS</Link>
          <Link className="NavItem nav-link" to="/citas">CITAS</Link>
          <Link className="NavItem nav-link" to="/cotizacion">COTIZACIÓN</Link>
          <Link className="NavItem nav-link" to="/contacto">CONTACTO</Link>
          <Link className="NavItem nav-link" to="/nosotros">NOSOTROS</Link>
          {isLoggedIn() && (
            <>
              <Link className="NavItem nav-link" to="/admin/citas">VER CITAS</Link>
              <Link className="NavItem nav-link" to="/admin/cotizaciones">VER COTIZACIONES</Link>
              <span>
                <Button variant="danger" style={{margin: '10px'}} onClick={LogOut}>Cerrar Sesion</Button>
              </span>
            </>
          )}
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  </header>
);

export default Navigation;
