import React from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import URI from './URI';

import './css/Cotizacion.css';

const Cotizacion = ({ history }) => {
	const { register, errors, handleSubmit } = useForm({
		nombre: '',
		correo: '',
		telefono: '',
		placas: '',
		marcaauto: '',
		añoauto: '',
		kilometraje: '',
		tamañomotor: '',
		servicio: '',
		otro: ''
	});

	const onSubmit = (data) => {
		console.log(data);
		return axios
			.post(`${URI.base}${URI.routes.postQuote}`, { ...data })
			.then(resp => {
				console.log(resp);
				history.push('/cotizacion');
				toast.warning('Cotización enviada', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,

					});

			})
			.catch(err => err.response ? err.response.data.message : err.message);
	}

	const onError = (errors) => console.error(errors);

	return (
		<div className="d-md-flex h-md-100 leftside align-items-center">
			<ToastContainer draggable={false} autoClose={4000} />
			<div className="col-md-6 p-0 leftside h-md-100">
				<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div className="logoarea pt-5 pb-5">
						<h1>COTIZACIÓN</h1>
					</div>
				</div>
			</div>

			<div className="col-md-6 p-0 bg-white h-md-100 ">
				<div className=" align-items-center h-md-100 p-5 justify-content-center">
					<h1 className="mb-0 cotheader">¿Necesita una cotización?</h1>
					<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
						<div className="form-group">
							<label for="inputName">Nombre Completo</label>
							<input name="nombre" ref={register({ required: 'Esto es obligatorio' })} type="text" className="form-control" id="inputName"/>
							<ErrorMessage errors={errors} name="nombre" render={({ message }) => <p className="text-danger">{message}</p>}/>
						</div>
						<div className="form-group">
							<label for="inputEmail">Correo Electrónico</label>
							<input name="correo" ref={register({ required: 'Esto es obligatorio', pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Correo inválido' } })} type="text" className="form-control" id="inputEmail"/>
							<ErrorMessage errors={errors} name="correo" render={({ message }) => <p className="text-danger">{message}</p>}/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label for="inputPhone">Teléfono</label>
								<input name="telefono" ref={register({ required: 'Esto es obligatorio', pattern: { value: /[0-9]{10,}/, message: 'Numero inválido' } })} type="text" className="form-control" id="inputPhone"/>
								<ErrorMessage errors={errors} name="telefono" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
							<div className="form-group col-md-6">
								<label for="inputPlate">Placas</label>
								<input name="placas" ref={register({ required: 'Esto es obligatorio' })} type="text" className="form-control" id="inputPlate"/>
								<ErrorMessage errors={errors} name="placas" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label for="inputCarBrand">Marca del auto</label>
								<input name="marcaauto" ref={register({ required: 'Esto es obligatorio' })} type="text" className="form-control" id="inputCarBrand"/>
								<ErrorMessage errors={errors} name="marcaauto" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
							<div className="form-group col-md-6">
								<label for="inputYearBrand">Año del auto</label>
								<input name="añoauto" ref={register({ required: 'Esto es obligatorio', pattern: { value: /[0-9]{4}/, message: 'Año inválido' }})} type="number" className="form-control" id="inputYearBrand"/>
								<ErrorMessage errors={errors} name="añoauto" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label for="inputKm">Kilometraje</label>
								<div className="input-group">
									<input name="kilometraje" ref={register({ required: 'Esto es obligatorio', validate: value => (!isNaN(value) && Number(value) >= 0) || 'Numero inválido' })} type="number" className="form-control" id="inputKm"/>
									<div className="input-group-append">
										<span className="input-group-text">km</span>
									</div>
								</div>
								<ErrorMessage errors={errors} name="kilometraje" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
							<div className="form-group col-md-6">
								<label for="inputMotorSize">Tamaño del motor</label>
								<input name="tamañomotor" ref={register({ required: 'Esto es obligatorio' })} type="text" className="form-control" id="inputMotorSize"/>
								<ErrorMessage errors={errors} name="tamañomotor" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label for="inputService">Servicio</label>
								<select name="servicio" ref={register({ required: 'Esto es obligatorio' })} className="form-control" id="inputService">
									<option value="" selected disabled hidden>Escoge...</option>
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
								<ErrorMessage errors={errors} name="servicio" render={({ message }) => <p className="text-danger">{message}</p>}/>
							</div>
							<div className="form-group col-md-6">
								<label for="inputOther">Otro</label>
								<input name="otro" ref={register} type="text" className="form-control" id="inputOther"/>
							</div>
							<div className="form-group col-md-12">
							<label htmlFor="inputDescription">Descripción de Servicio o Falla</label>
							<textarea name="descripcion" ref={register({ required: "Esto es obligatorio" })} className="form-control" id="inputDescription" rows="3"></textarea>
							<ErrorMessage errors={errors} name="descripcion" render={({ message }) => <p className='text-danger'>{message}</p>}/>
						</div>
						</div>

						<div className="form-group row">
							<div className="col-sm-12 btnCot">
								<button className="btn btn-primary" type='submit'>Enviar cotización</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Cotizacion;
