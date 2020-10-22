import React, { Component, useState, useReducer } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import URI from './URI';
import './Cotizacion.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialState = {
	nombre: '',
	correo: '',
	telefono: '',
	placas: '',
	marcaauto: '',
	añoauto: '',
	kilometraje: '',
	tamañomotor: '',
	servicio: '',
	otro: '',
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
		state.marcaauto !== '' &&
		state.añoauto !== '' &&
		state.kilometraje !== '' &&
		state.tamañomotor !== '' &&
		state.servicio !== '' &&
		state.otro !== ''
	) {
		return true;
	}
	return false;
}

const Cotizacion = (props) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const onChange = (e) => {
		dispatch({ field: e.target.name, value: e.target.value });
	};
	const _postQuoteHandler = (_) => {
		if (checkInputs(state)) {
			let {
				nombre,
				correo,
				telefono,
				placas,
				marcaauto,
				añoauto,
				kilometraje,
				tamañomotor,
				servicio,
				otro,
			} = state;
			return axios
				.post(`${URI.base}${URI.routes.postQuote}`, {
					nombre,
					correo,
					telefono,
					placas,
					marcaauto,
					añoauto,
					kilometraje,
					tamañomotor,
					servicio,
					otro,
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
	const _quote = async (e) => {
		e.preventDefault();
		let respError = await _postQuoteHandler();
		if (respError) {
			dispatch({ field: 'error', value: respError });
		} else {
			if(state.nombre == '' || state.correo == '' || state.telefono == '' || state.placas == '' || state.marcaauto == '' || state.añoauto == '' || state.kilometraje == '' || state.tamañomotor == '' || state.servicio == ''){
				alert("Todos los campos deben estar completos")
			}else{
				alert("Cotización enviada éxitosamente")
				props.history.push('/');
			}
			
		}
	};
	const _handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			_quote(e);
		}
	};
	return (
		<div class="d-md-flex h-md-100 align-items-center">
			<div class="col-md-6 p-0 bg-dark h-md-100">
				<div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div class="logoarea pt-5 pb-5">
						<h1>Cotización</h1>
					</div>
				</div>
			</div>

			<div class="col-md-6 p-0 bg-white h-md-100 ">
				<div class=" align-items-center h-md-100 p-5 justify-content-center">
					<h1 class="mb-0 cotheader">¿Necesita una cotización?</h1>
					<form>
						<div class="form-group">
							<label for="inputAddress">Nombre Completo</label>
							<input
								type="text"
								class="form-control"
								id="inputAddress"
								onChange={onChange}
								onKeyDown={_handleKeyDown}
								name="nombre"
							/>
						</div>
						<div class="form-group">
							<label for="inputAddress">Correo Electrónico</label>
							<input
								type="text"
								class="form-control"
								id="inputAddress"
								onChange={onChange}
								onKeyDown={_handleKeyDown}
								name="correo"
							/>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputEmail4">Teléfono</label>
								<input
									type="text"
									class="form-control"
									id="inputEmail4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="telefono"
								/>
							</div>
							<div class="form-group col-md-6">
								<label for="inputPassword4">Placas</label>
								<input
									type="text"
									class="form-control"
									id="inputPassword4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="placas"
								/>
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputEmail4">Marca del auto</label>
								<input
									type="text"
									class="form-control"
									id="inputEmail4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="marcaauto"
								/>
							</div>
							<div class="form-group col-md-6">
								<label for="inputPassword4">Año del auto</label>
								<input
									type="text"
									class="form-control"
									id="inputPassword4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="añoauto"
								/>
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputEmail4">Kilometraje</label>
								<input
									type="text"
									class="form-control"
									id="inputEmail4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="kilometraje"
								/>
							</div>
							<div class="form-group col-md-6">
								<label for="inputPassword4">Tamaño del motor</label>
								<input
									type="text"
									class="form-control"
									id="inputPassword4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="tamañomotor"
								/>
							</div>
						</div>
						<div class="form-row">
							<div class="form-group col-md-6">
								<label for="inputState">Servicio</label>
								<select
									id="inputState"
									class="form-control"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="servicio"
								>
									<option selected>Escoge...</option>
									<option>ABS</option>
									<option>Bombas de agua</option>
									<option>Diagnóstico por computadora</option>
									<option>Frenos</option>
									<option>Cambios de aceite</option>
									<option>Fuel Injection</option>
									<option>Check engine</option>
									<option>Afinación</option>
									<option>Sistema Eléctrico</option>
									<option>Vibraciones o ruidos</option>
									<option>Aire acondicionado</option>
									<option>Calefacción</option>
									<option>Sistema de carga</option>
									<option>Sistema de enfriamiento</option>
									<option>Suspensión</option>
									<option>Fugas de aceite</option>
									<option>Fugas de refrigerante</option>
									<option>Ponchaduras</option>
									<option>Bombas de gasolina</option>
								</select>
							</div>
							<div class="form-group col-md-6">
								<label for="inputPassword4">Otro</label>
								<input
									type="text"
									class="form-control"
									id="inputPassword4"
									onChange={onChange}
									onKeyDown={_handleKeyDown}
									name="otro"
								/>
							</div>
						</div>
						<div class="form-group row">
							<div class="col-sm-12 btnCot">
								<Button class="btn btn-primary" onClick={_quote}>
									Enviar cotización
								</Button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
{
}
export default Cotizacion;
