import React, { Component } from 'react';
import './index.css';
import { Route } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';

class Landing extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div>
				<div className='popup'>
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
				</div>
				Landing
			</div>
		);
	}
}

export default Landing;
