import React, { Component } from 'react';
import FormCalendar from './components/FormCalendar';
import FormSlots from './components/FormSlots';
import Confirm from './components/Confirm';
import Success from './components/Success';
import FormUserInfo from './components/FormUserInfo';

import './css/Citas.css';
export class Citas extends Component {
	constructor() {
		super();
		this.state = {
			step: 1,
			fecha: null,
			slotID: '',
			hora: '',
			nombre: '',
			correo:'',
			telefono: '',
			placas: '',
			descripcion: '',
		};

		this.selectedTime = this.selectedTime.bind(this);
	}

	//Process to next step
	nextStep = () => {
		const { step } = this.state;
		this.setState({
			step: step + 1,
		});
	};

	//Go back to previous to next step
	prevStep = () => {
		const { step } = this.state;
		this.setState({
			step: step - 1,
		});
	};

	//Handle fields change
	handleChange = (input) => (e) => {
		this.setState({ [input]: e.target.value });
	};

	selectedTime(i) {
		this.setState({ hora: i.hora, slotID:i.id})
	}

	render() {
		const { step, ...values } = this.state;

		switch (step) {
			case 1:
				return (
					<FormCalendar
						nextStep={this.nextStep}
						handleChange={this.handleChange}
						values={values}
					/>
				)
			case 2:
				return (
					<FormSlots
						selectedTime={this.selectedTime}
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				);
			case 3:
				return (
					<FormUserInfo
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						handleChange={this.handleChange}
						values={values}
					/>
				)
			case 4:
				return (
					<Confirm
						nextStep={this.nextStep}
						prevStep={this.prevStep}
						values={values}
					/>
				)
			case 5:
				return (
					<Success/>
				)
			default: break;
		}
	}
};

export default Citas;
