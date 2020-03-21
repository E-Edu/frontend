import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.scss';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className='header'>
			<div>
				<h1>E-EDU</h1>
			</div>
			<div id='Button_Box'>
				<button className='BTN' id='Button_Login'>LOGIN</button>
				<button className='BTN' id='Button_Register'>REGISTER</button>
			</div>
		</div>;
	}
}

export default Header;
