import React, { Component } from 'react';
import './index.scss';
import Header from '../../components/Header';

class Imprint extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='imprint'>
				<Header side="Landing"/>
				<div className='headingFont'>Imprint</div>
				<div className='fontBox'>
					hallo ich bin so ein Text
					<br />
					Bitte überlegt euch noch was hier stehen soll
				</div>
			</div>
		);
	}
}

export default Imprint;
