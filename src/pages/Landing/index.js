import React, { Component } from 'react';
import './index.css';
import { Route } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Landing extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='landing'>
				<Header side='Landing'></Header>
				<div className='Main'>
					<div className='popup'>
						<Route path='/login' component={Login} />
						<Route path='/register' component={Register} />
					</div>
					<div id='content'>
						<div id='image-landigpage'>
							<img id='landigpage-img' src="landingpage-teaching.svg" alt="landigpage-teaching image"/>
						</div>
						<div id='text-content'>
							<h2>Education for all</h2>
							<h4>Keine Ahnung was ich schreiben soll, das ist ein Feature Text. Bitte etwas besseres überlegen</h4>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default Landing;
