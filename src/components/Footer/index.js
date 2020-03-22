import React, { Component } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='FooterNavbar'>
				<div id='legal'>
					<Link to='/imprint'>Impressum</Link>
					<Link to='/privacy'>Datenschutzerklärung</Link>
					<Link to='/credits'>Credits</Link>
				</div>
				<div id='Copyright'>
					<span>&copy; 2020 The Morpheus Tutorials Community</span>
				</div>
			</div>
		);
	}
}

export default Footer;
