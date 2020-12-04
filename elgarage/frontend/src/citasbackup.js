
import React from "react";
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import moment from 'moment';
import Calendar from 'react-calendar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

import URI from "./URI";
import "./Cotizacion.css";

const Citas = ({ history }) => {
	const { register, errors, getValues, handleSubmit } = useForm({
		defaultValues: {
			nombre: '',
			correo: '',
			telefono: '',
			placas: '',
			fecha: '',
			hora: '',
			descripcion: ''
		}
	});

	const onSubmit = (data) => {
		console.log(data);
		return axios
			.post(`${URI.base}${URI.routes.postApppointment}`, { ...data })
			.then(resp => {
				toast.warning('Cita agendada éxitosamente', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				
					});
				console.log(resp);
				//history.push('/');
			})
			.catch(err => err.response ? err.response.data.message : err.message);
	}

	const onError = (errors) => console.error(errors);

	return (
		<div className="d-md-flex h-md-100 align-items-center">
				<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div className="logoarea pt-5 pb-5">
						<form>
						<div className="form-group">
							<label htmlFor="inputName">Nombre Completo</label>
							<input name="nombre" ref={register({ required: "Esto es obligatorio" })} className="form-control" id="inputName"/>
							<ErrorMessage errors={errors} name="nombre" render={({ message }) => <p className='text-danger'>{message}</p>}/>
						</div>
						<div className="form-group">
							<label htmlFor="inputEmail">Correo Electrónico</label>
							<input name="correo" ref={register({ required: "Esto es obligatorio", pattern: { value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Correo inválido' }})} type="email" className="form-control" id="inputEmail"/>
							<ErrorMessage errors={errors} name="correo" render={({ message }) => <p className='text-danger'>{message}</p>}/>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<label htmlFor="inputPhone">Teléfono</label>
								<input name="telefono" ref={register({ required: "Esto es obligatorio", pattern: { value: /[0-9]{10,}/, message: 'Numero inválido' }})} type="text" className="form-control" id="inputPhone"/>
								<ErrorMessage errors={errors} name="telefono" render={({ message }) => <p className='text-danger'>{message}</p>}/>
							</div>
							<div className="form-group col-md-6">
								<label htmlFor="inputPlate">Placas</label>
								<input name="placas" ref={register({ required: "Esto es obligatorio" })} type="text" className="form-control" id="inputPlate"/>
								<ErrorMessage errors={errors} name="placas" render={({ message }) => <p className='text-danger'>{message}</p>}/>
							</div>
						</div>
						<div className="form-group">
							<label htmlFor="inputDescription">Descripción de Servicio o Falla</label>
							<textarea name="descripcion" ref={register({ required: "Esto es obligatorio" })} className="form-control" id="inputDescription" rows="3"></textarea>
							<ErrorMessage errors={errors} name="descripcion" render={({ message }) => <p className='text-danger'>{message}</p>}/>
						</div>
						</form>
					</div>
				</div>
				
				<div className=" align-items-center h-md-100 p-5 justify-content-center">
				<ToastContainer draggable={false} autoClose={4000} />
					<h1 className="mb-0 cotheader">¿Necesita hacer una cita?</h1>
					<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
						
						<div className="form-row">
						<Calendar
         // onChange={this.props.onChange}
          //value={this.props.date}
        />
						</div>
						<div className="form-group row">
							<div className="col-sm-12 btnCot">
								<button className="btn btn-primary" type='submit'>Agendar cita</button>
							</div>
						</div>
					</form>
				</div>
			</div>
	)
}

export default Citas;