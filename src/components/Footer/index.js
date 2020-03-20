import React, { Component } from 'react';
import './index.css';

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div>
				Footer:
				<ul>
					Help:
					<li>Link</li>
					<li>Link</li>
				</ul>
				<ul>
					Task:
					<li>Create</li>
					<li>Make</li>
				</ul>
			</div>
		);
	}
}

export default Footer;
