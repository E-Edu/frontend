import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.scss';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		switch (this.props.side) {
			case 'Landing':
				return(
					<div className='header'>
						<div>
							<h1 id='title'>E-EDU</h1>
						</div>
						<div id='Button_Box_Landing'>
							<button className='BTN_Log' id='Button_Login'>LOGIN</button>
							<button className='BTN_Log' id='Button_Register'>REGISTER</button>
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
								<button className='BTN_Dash' id='Button_Info' >
									<img src="assets/helpcircle.svg" alt="Help"/>
								</button>
								<button className='BTN_Dash' id='Button_Logout'>
									<img src="assets/logout.svg" alt="Logout"/>
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
