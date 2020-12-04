import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
	render() {
		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="SUCCESS" />
					<h1>Cita agendada exitosamente</h1>
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

export default Success;
