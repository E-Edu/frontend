import React, { Component } from 'react';
import './index.scss';
import { Route, Redirect } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Landing_Image from '../../assets/Picture/landingpage-teaching.svg';
import Modal from 'react-animated-modal';

class Landing extends Component {
	state = { showModal: false, redirect: false };

	render() {
		return (
			<div className='landing'>
				<Header side='Landing'/>
				<div className='Main'>
					{(() => {
						if (this.state.redirect) {
							this.setState({ redirect: false });

							return <Redirect exact to={this.state.redirect} />;
						}
					})()}
					<Route
	exact
	path={['/login', '/register']}
	render={() => {
		if (!this.state.showModal && !this.state.redirect) {
			this.setState({showModal: true});
		}
	}}
	/>

					<Modal
						visible={this.state.showModal}
						closemodal={() => {
							console.log('close modal');
							this.setState({ showModal: false, redirect: '/' });
						}}
						type='fadeIn'
					>
						<Route exact path='/login' component={Login} />
						<Route exact path='/register' component={Register} />
					</Modal>

					<div id='content'>
						<div id='image-landigpage'>
							<img
								id='landigpage-img'
								src={Landing_Image}
								alt='landigpage-teaching image'
							/>
						</div>
						<div id='text-content'>
							<h2>Education for all</h2>
							<h4>
								Keine Ahnung was ich schreiben soll, das ist ein Feature Text. Bitte
								etwas besseres überlegen
							</h4>
						</div>
					</div>
				</div>
				<Footer></Footer>
			</div>
		);
	}
}

export default Landing;
