import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Help_Image from '../../assets/icons/helpcircle.svg';
import Logout_Image from '../../assets/icons/logout.svg';

class Header extends Component {
	render() {
		switch (this.props.side) {
			case 'Landing':
				return (
					<div className='headerNavbar'>
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
					<div className='headerNavbar'>
						<div>
							<Link to={'/'} style={{textDecoration: "none"}}>
								<h1 id='title'>E-EDU</h1>
							</Link>
						</div>
						<div id='Button_Box_Dashboard'>
							<Link to="/imprint" className='BTN_Dash' id='Button_Info'>
								<img src={Help_Image} alt='Help' />
							</Link>
							<Link className='BTN_Dash' id='Button_Logout'>
								<img src={Logout_Image} alt='Logout' />
							</Link>
						</div>
					</div>
				);
		}
		return null;
	}
}

export default Header;

