import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.scss';
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch (this.props.side) {
			case 'Landing':
				return (
					<div className='header'>
						<div>
							<h1 id='title'>E-EDU</h1>
						</div>
						<div id='Button_Box_Landing'>
							<Link className='BTN_Log' id='Button_Login' to={'/login'}>
								LOGIN
							</Link>
							<Link className='BTN_Log' id='Button_Register' to={'/register'}>
								REGISTER
							</Link>
						</div>
					</div>
				);
				break;
			case 'Dashboard':
				return (
					<div className='header'>
						<div>
							<h1 id='title'>E-EDU</h1>
						</div>
						<div id='Button_Box_Dashboard'>
							<button className='BTN_Dash' id='Button_Info'>
								<img src='assets/helpcircle.svg' alt='Help' />
							</button>
							<button className='BTN_Dash' id='Button_Logout'>
								<img src='assets/logout.svg' alt='Logout' />
							</button>
						</div>
					</div>
				);
				break;
		}
		return null;
	}
}

export default Header;
