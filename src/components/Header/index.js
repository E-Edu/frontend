import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.scss';
import { Link } from 'react-router-dom';
import Help_Image from '../icons/help-circle.icon';
import Logout_Image from '../icons/logout.icon';
class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch (this.props.side) {
			case 'Landing':
				return (
					<div id="HeaderNavbarId" className='headerNavbar'>
						<div className="logo">
							<img src="assets/logo.svg" alt="" width="24px"/>
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
			case 'Dashboard':
				return (
					<div id="HeaderNavbarId" className='headerNavbar'>
						<div>
							<h1 id='title'>E-EDU</h1>
						</div>
						<div id='Button_Box_Dashboard'>
							<button className='BTN_Dash' id='Button_Info'>
								<Help_Image/>
							</button>
							<button className='BTN_Dash' id='Button_Logout'>
								<Logout_Image/>
							</button>
						</div>
					</div>
				);
		}
		return null;
	}
}

export default Header;

