import React, { Component } from "react";

import "./Cotizacion.css";

class Cotizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      showRegister: false,
      value: "hide",
    };
  }
  inputUniv = (e) => {
    this.setState({ value: e.target.value });
  };
  operation() {
    this.setState({
      showLogin: this.state.showRegister,
      showRegister: this.state.showLogin,
    });
  }

  render() {
    return (
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-dark h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
           <h1>CARRO</h1>
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
          <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <div>
              <form class="form-inline">
                <input
                  type="text"
                  class="inputCotizacion"
                  name="nombre completo"
                  placeholder="Nombre Completo"
                  required
                />
                <input
                  type="text"
                  class="inputCotizacion"
                  name="correo electronico"
                  placeholder="Correo Electrónico"
                  required
                />
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="nombre"
                      placeholder="Teléfono"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="apellido"
                      placeholder="Placas"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="apellido"
                      placeholder="Marca del auto"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="apellido"
                      placeholder="Año del auto"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="apellido"
                      placeholder="Kilometraje"
                      required
                    />
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="apellido"
                      placeholder="Tamaño del motor"
                      required
                    />
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <select
                      class="form-control inputRegistro"
                      id="inputGenero"
                      required
                    >
                      <option>Servicio</option>
                      <option>ABS</option>
                      <option>Check Engine</option>
                      <option>Otro</option>
                    </select>{" "}
                  </div>
                  <div class="form-group col-md-6">
                    <input
                      type="text"
                      class="inputRegistro"
                      name="apellido"
                      placeholder="Otro"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cotizacion;
