import React, { Component } from 'react';
import './index.scss';

class MenuElement extends Component {
	constructor(props) {
		super(props);
		this.state = {active: props.active, file: props.file, name: props.name};
	}

	setActivity(activity) {
		// the active changes the icon
		this.setState({active: activity || this.props.active});
	}
	onMouseEnterHandler =  () => {
		this.setActivity(true);
	};

	onMouseLeaveHandler =  () => {
		this.setActivity(false);
	};

	render() {
		let ending;
		// get the right filename, if active or not
		if (!this.state.active) {
			ending = ".svg";
		}
		else {
			ending = "-active.svg";
		}
		let nameText = "";
		if (this.state.name) {
			nameText = <span>{this.state.name}</span>;
		}
		const filename = "assets/icons/" + this.state.file + ending;
		return (
			<Link to={"/" + this.props.url} className="menuElement" key={this.state.file} style={{marginTop: 50, display: "block"}}
			   onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
				<img src={filename} alt=""/>
				<br/>
				{nameText}
			</Link>
		);
	}
}


class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {activeName: props.active}
	}

	render() {
		const sites = [
			//TODO edit the addresses of pages
			["Menu", "home", "dashboard"],
			["Aufgaben", "edit", "dashboard"],
			["Neue Aufgabe", "plus-circle", "dashboard"],
			["Meine Aufgaben", "list", "dashboard"],
			["Korrektur", "check", "dashboard"],
			["Reports", "alert-circle", "dashboard"],
			["Add teacher", "user", "dashboard"],
			["", "settings", "dashboard"],
			["", "user", "dashboard"]
		];
		let sitesHtml = sites.map((site) => {
			let active = false;
			if (this.state.activeName === site[1]) {
				active = true;
			}
			return <MenuElement name={site[0]} file={site[1]} url={site[2]} active={active} />;
		});
		return (
			<div id="Menu">
				{sitesHtml}
			</div>
		);
	}
}

export default Sidebar;
