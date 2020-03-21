import React, { Component } from 'react';
import './index.scss';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return <div className='Footer'>
			<div id='legal'>
				<a href="#">Impressum</a>
				<a href="#">Datenschutzerklärung</a>
			</div>
			<div id='Copyright'>
				<span>&copy; 2020 The Morpheus Tutorials Community</span>
			</div>
		</div>;
	}
}

export default Footer;
