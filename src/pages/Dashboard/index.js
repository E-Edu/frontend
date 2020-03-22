import React, { Component } from 'react';
import Home_icon from '../../Assets/icons/home.svg';
import Task_icon from '../../Assets/icons/alert-circle.svg';
import './index.scss'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import codeimg from '../../../src/Assets/icons/dashboard/code.svg';
import calendar from '../../../src/Assets/icons/dashboard/calendar.svg';
import user from '../../../src/Assets/icons/dashboard/user.svg';
import users from '../../../src/Assets/icons/dashboard/users.svg';
import text from '../../../src/Assets/icons/dashboard/file-text.svg';
import codepen from '../../../src/Assets/icons/dashboard/codepen.svg';
import zap from '../../../src/Assets/icons/dashboard/zap.svg';


class DashboardBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div className='DashbordBox'>
			<div style={{ backgroundColor: this.props.color }} id='color'></div>
			<div className='top'>
				<img src={text} alt="code-icon" className='icon' />
				<p>{this.props.name}</p>
				<span>{this.props.subtitle}</span>
			</div>
			<div className='exercise'>
				<img src={calendar} alt="calendar-icon" />
				<p>Wöchentliche Aufgaben: {this.props.taskNumber}</p>
			</div>
			<div className='stats'>
				<img src={user} alt="user-icon" /> <p>{this.props.ownPoints} Punkte</p>
				<img src={users} alt="users-icon" /> <p>{this.props.allPoints} Punkte</p>
			</div>
		</div>
	}
}

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		let liste = [['#ff0000', 'Deutsch', 'Sprachen lernen - Babel', '4/5', '213', '21.323'],
		['#202bb5', 'Mathe', 'Sprachen lernen - Babel', '4/5', '213', '21.323'],
		['#000000', 'Informatik', 'Sprachen lernen - Babel', '4/5', '213', '21.323'],
		['#f45e00', 'Geschichte', 'Sprachen lernen - Babel', '4/5', '213', '21.323'],
		['#b520ab', 'Politik', 'Sprachen lernen - Babel', '4/5', '213', '21.323'],
		['#707070', 'Physik', 'Sprachen lernen - Babel', '4/5', '213', '21.323']];
		let listhtml = liste.map(fillhtml => {
			return (<DashboardBox color={fillhtml[0]} name={fillhtml[1]} subtitle={fillhtml[2]}
				taskNumber={fillhtml[3]} ownPoints={fillhtml[4]} allPoints={fillhtml[5]} />);
		});
		return <div className='dashboard'>
			<Header side='Dashboard' />
			<Sidebar side='Dashboard' />
			<div id='contentdashboard'>
				<div className='content-dashboard'>
					{listhtml}
				</div>
			</div>
		</div>;
	}
}


export default Dashboard;
