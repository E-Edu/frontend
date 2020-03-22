import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.scss';
import { Link } from 'react-router-dom';
import Help_Image from '../../Assets/icons/helpcircle.svg';
import Logout_Image from '../../Assets/icons/logout.svg';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch (this.props.side) {
			case 'Landing':
				return (
					<div className='headerNavbar'>
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
			case 'Dashboard':
				return (
					<div className='headerNavbar'>
						<div>
							<h1 id='title'>E-EDU</h1>
						</div>
						<div id='Button_Box_Dashboard'>
							<button className='BTN_Dash' id='Button_Info'>
								<img src={Help_Image} alt='Help' />
							</button>
							<button className='BTN_Dash' id='Button_Logout'>
								<img src={Logout_Image} alt='Logout' />
							</button>
						</div>
					</div>
				);
		}
		return null;
	}
}

export default Header;

