import React, { Component } from 'react';
import './index.scss';
import { Route, Redirect } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing_Image from '../../Assets/Picture/landingpage-teaching.svg';
import Modal from 'react-animated-modal';

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
