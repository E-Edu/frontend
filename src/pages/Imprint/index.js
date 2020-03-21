import React, { Component } from 'react';
import './index.scss';

class Imprint extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='imprint'>
				<div className='leisteOben'>
					<div className='eduSchrift'>E-EDU</div>
				</div>
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
