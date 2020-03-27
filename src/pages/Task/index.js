import React, { Component } from 'react';
import './index.scss';
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
class Template extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	componentDidMount() {
		const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
		const left = document.getElementById('Menu').clientWidth;
		document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
	}

	render() {
		return (<div>
			<div id="main">
			</div>
		</div>);
	}
}

export default Template;
