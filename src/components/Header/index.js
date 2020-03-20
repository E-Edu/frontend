import React, { Component } from 'react';
import logo from '../../logo.svg';
import './index.css';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='header'>
				<header className='App-header'>
					<div>
						<button>
							<img src={logo}></img>
							E-Edu
						</button>
					</div>
					<div>
						<button>Home</button>
					</div>
					<div>
						<button>Anmeldung</button>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;
