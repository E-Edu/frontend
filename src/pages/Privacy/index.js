import React, { Component } from 'react';
import './index.scss';
import Header from '../../components/Header';

class Privacy extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='privacy'>
				<Header side='Landing'/>
				<div className='headingFont'>Privacy policy</div>
				<div className='fontBox'>
					hallo ich bin so ein Text
					<br />
					Bitte überlegt euch noch was hier stehen soll
				</div>
			</div>
		);
	}
}

export default Privacy;
