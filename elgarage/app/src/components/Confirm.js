import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Confirm = (props) => {
	console.log(props);
	const back = (e)=>{
		e.preventDefault();
		props.prevStep()
	}
		const postAppointment = async (e) => {
		e.preventDefault();
		let respError = await _postAppointmentHandler();
		if (respError) {
			console.log("NOTCOOL",respError);

		} else {
			console.log("cool")
			return props.history.push('/Success');
		}
	};

	const _postAppointmentHandler = (_) => {
			let {nombre,correo,telefono,placas,fecha,hora,descripcion,} = props.values;
			console.log(nombre,correo,telefono,placas,fecha,hora,descripcion);
			return axios
				.post(`http://localhost:8000/api/citas`, {nombre,correo,telefono,placas,fecha,hora,descripcion})
				.then(_ => {
					return axios.delete(`http://localhost:8000/api/deleteSlot/${props.values.slotID}`)
			})
				.catch((error) => {

				});
	};

	return (
		<div className="d-md-flex h-md-100 leftside align-items-center">
			<div className="col-md-6 p-0 leftside h-md-100">
				<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
					<div className="logoarea pt-5 pb-5">
					<h1 className="mb-0 cotheader">CONFIRMAR DATOS</h1>
					</div>
				</div>
			</div>
			<div className="col-md-6 p-0 bg-white h-md-100 ">
				<div className=" align-items-center h-md-100 p-5 justify-content-center">
					<MuiThemeProvider>
						<React.Fragment>
							<Form >
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Nombre</Form.Label>
									<Form.Control required type="text" name="nombre" value={props.values.nombre}/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Correo</Form.Label>
									<Form.Control type="text" name="correo" value={props.values.correo}/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Teléfono</Form.Label>
									<Form.Control type="text" name="telefono" value={props.values.telefono}/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Placas</Form.Label>
									<Form.Control type="text" name="placas" value={props.values.placas}/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Día</Form.Label>
									<Form.Control type="text" name="fecha" value={props.values.fecha}/>
								</Form.Group>

								<Form.Group controlId="formBasicEmail">
									<Form.Label>Hora</Form.Label>
									<Form.Control type="text" name="hora" value={props.values.hora}/>
								</Form.Group>
								<Form.Group controlId="formBasicEmail">
									<Form.Label>Descripción</Form.Label>
									<Form.Control type="text" name="descripcion" value={props.values.descripcion}/>
								</Form.Group>
								<div className="form-group row">
										<div className="col-sm-12 btnCot">
										<Button className="btnCitas" variant="primary" onClick={back}  type="submit">
									Regresar
								</Button>
									<Button className="btnCitas" variant="primary" onClick={postAppointment} type="submit">
									Submit
								</Button>
										</div>
									</div>
							</Form>
						</React.Fragment>
					</MuiThemeProvider>
				</div>
			</div>
		</div>
	);
};

export default Confirm;
