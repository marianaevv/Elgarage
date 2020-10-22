
import React, { Component, useReducer } from "react";
import "./Cotizacion.css";
import axios from 'axios';
import URI from "./URI";
import "bootstrap/dist/css/bootstrap.min.css";

const initialState = {
	nombre: '',
	correo: '',
	telefono: '',
	placas: '',
	fecha: '',
	hora: '',
	descripcion: '',
	error: '',
};
function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}
function checkInputs(state) {
	if (
		state.nombre !== '' &&
		state.correo !== '' &&
		state.telefono !== '' &&
		state.placas !== '' &&
		state.fecha !== '' &&
		state.hora !== '' &&
		state.descripcion !== ''
	) {
		return true;
	}
	return false;
}
const Citas = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const onChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};
  const _postAppointmentHandler = (_) => {
		if (checkInputs(state)) {
			let {
				nombre,
				correo,
				telefono,
				placas,
				fecha,
				hora,
				descripcion,
			} = state;
			return axios
				.post(`${URI.base}${URI.routes.postApppointment}`, {
					nombre,
					correo,
					telefono,
					placas,
					fecha,
					hora,
					descripcion,
				})
				.then((response) => {
					console.log(response);
					return null;
				})
				.catch((error) => {
					if (error.response) {
						return error.response.data.message;
					} else return error.message;
				});
		}
	};
	const _appointment = async (e) => {
		e.preventDefault();
		let respError = await _postAppointmentHandler();
		if (respError) {
			dispatch({ field: 'error', value: respError });
		} else {
			if(state.nombre == '' || state.correo == '' || state.telefono == '' || state.placas == '' || state.fecha == '' || state.hora !== '' || state.descripcion !== ''){
				alert("Todos los campos deben estar completos")
			}else{
				alert("Cita agendada éxitosamente")
				props.history.push('/');
			}
			
			
		}
	};
	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_appointment(e);
		}
	};

 
    return (
      <div class="d-md-flex h-md-100 align-items-center">
        <div class="col-md-6 p-0 bg-dark h-md-100">
          <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
            <div class="logoarea pt-5 pb-5">
              <h1>CITAS</h1>
            </div>
          </div>
        </div>

        <div class="col-md-6 p-0 bg-white h-md-100 ">
          <div class=" align-items-center h-md-100 p-5 justify-content-center">
          <h1 class="mb-0 cotheader">¿Necesita hacer una cita?</h1>
            <form>
            <div class="form-group">
              <label for="inputAddress">Nombre Completo</label>
              <input type="text" class="form-control" id="inputAddress"
              	onChange={onChange}
								onKeyDown={_handleKeyDown}
								name="nombre" required/>
            </div>
            <div class="form-group">
              <label for="inputAddress">Correo Electrónico</label>
              <input type="email" class="form-control" id="inputAddress"
              	onChange={onChange}
								onKeyDown={_handleKeyDown}
								name="correo" required/>
            </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Teléfono</label>
                  <input type="text" class="form-control" id="inputEmail4"
                  	onChange={onChange}
                    onKeyDown={_handleKeyDown}
                    name="telefono" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Placas</label>
                  <input type="text" class="form-control" id="inputPassword4"
                  	onChange={onChange}
                    onKeyDown={_handleKeyDown}
                    name="placas"required/>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputEmail4">Fecha</label>
                  <input type="date" class="form-control" id="inputEmail4"
                  	onChange={onChange}
                    onKeyDown={_handleKeyDown}
                    name="fecha" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="inputPassword4">Hora</label>
                  <input type="time" class="form-control" id="inputPassword4"
                  	onChange={onChange}
                    onKeyDown={_handleKeyDown}
                    name="hora"required/>
                </div>
              </div>
              <div class="form-group">
    <label for="exampleFormControlTextarea1">Descripción de Servicio o Falla</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
    	onChange={onChange}
      onKeyDown={_handleKeyDown}
      name="descripcion"required></textarea>
  </div>
              <div class="form-group row">
    <div class="col-sm-12 btnCot">
      <button  class="btn btn-primary"onClick={_appointment}>Agendar cita</button>
    </div>
  </div>
            </form>
           </div>
        </div>
      </div>
    );
  }

export default Citas;
