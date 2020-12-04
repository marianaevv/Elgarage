import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'react-day-picker/lib/style.css';

export default class FormCalendar extends React.Component {
	constructor(props) {
		super(props);
		this.handleDayClick = this.handleDayClick.bind(this);
		this.state = {
			selectedDay: null
		};
	}

	continue = (e) => {
		let val = document.getElementById('example-date-input').value
		var today = new Date();
		var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
		if (val === ''){
			alert("Por favor seleccione una fecha valida")
		} else if (val < date){
			alert("Por favor seleccione una fecha que sea en el futuro")
		} else {
			e.preventDefault();
			this.props.nextStep();
		}
	}

	handleDayClick(day, { selected }) {
		this.setState({
			selectedDay: selected ? undefined : day,
		});
	}

	render() {
		const { values, handleChange } = this.props;

		return (
			<div className="d-md-flex h-md-100 leftside align-items-center">
				<div className="col-md-6 p-0 leftside h-md-100">
					<div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
						<div className="logoarea pt-5 pb-5">
							<h1>¿Desea agendar una cita?</h1>
						</div>
					</div>
				</div>
				<div className="col-md-6 p-0 bg-white h-md-100 ">
					<div className=" align-items-center  h-md-100 p-5 justify-content-center">
						<div className="formCalendar">
							<h1 className="mb-0 cotheader">SELECCIONA FECHA</h1>
							<MuiThemeProvider>
								<React.Fragment>
									<div className="Container">
										<div class="form-group row">
											<label for="example-date-input" class="col-2 col-form-label">
												Día
											</label>
											<div class="col-10">
												<input
													class="form-control"
													type="date"
													onChange={handleChange('fecha')}
													defaultValue={values.fecha}
													id="example-date-input"
												/>
											</div>
										</div>
									</div>
									<div className="form-group row">
										<div className="col-sm-12 btnCot">
											<button className="btn btn-primary" onClick={this.continue} type="submit">
												CONTINUAR
											</button>
										</div>
									</div>
								</React.Fragment>
							</MuiThemeProvider>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
