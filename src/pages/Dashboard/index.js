import React, { Component } from 'react';
import './index.css';
<<<<<<< Updated upstream
import Header from '../../components/Header';
import Home_icon from '../../Assets/icons/home.svg';
import Task_icon from '../../Assets/icons/alert-circle.svg';
=======
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
>>>>>>> Stashed changes

class Dashboard extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
<<<<<<< Updated upstream
		return (
			<div className='main'>
				<Header side='Dashboard' />
				<div className='sidebar'>
					<a href='#' className='Menu' id='Home'>
						<img src={Home_icon} alt='Home' />
						<span>Home</span>
					</a>
					<a href='#' className='Menu' id='Task'>
						<img src={Task_icon} alt='Task' />
						<span>Home</span>
					</a>
				</div>
				<div className='content'>
=======
		return <div className='dashboard'>
			<div className='head'>
				<Header side='Dashboard' />
			</div>
			<div className='sid'>
				<Sidebar side='Dashboard' />
			</div>

			<div id='content'>
				<div className='content-dashboard'>
					<div className='box'>
						<div id='color'></div>
						<div className='top'>
							<img src={text} alt="code-icon" className='icon' />
							<p>Deutsch</p>
							<span>Sprachen lernen - Babel</span>
						</div>

						<div className='exercise'>
							<img src={calendar} alt="calendar-icon" />
							<p>Wöchentliche Aufgaben: 4/5</p>
						</div>
						<div className='stats'>
							<img src={user} alt="user-icon" /> <p>213 Punkte</p>
							<img src={users} alt="users-icon" /> <p>21.323 Punkte</p>
						</div>
					</div>
>>>>>>> Stashed changes
					<div className='box'>
						<div id='color2'></div>
						<div className='top'>
							<img src={codeimg} alt="code-icon" className='icon' />
							<p>Mathe</p>
							<span>Sprachen lernen - Babel</span>
						</div>

						<div className='exercise'>
							<img src={calendar} alt="calendar-icon" />
							<p>Wöchentliche Aufgaben: 4/5</p>
						</div>
						<div className='stats'>
							<img src={user} alt="user-icon" /> <p>213 Punkte</p>
							<img src={users} alt="users-icon" /> <p>21.323 Punkte</p>
						</div>
					</div>
					<div className='box'>
						<div id='color3'></div>
						<div className='top'>
							<img src={codeimg} alt="code-icon" className='icon' />
							<p>Informatik</p>
							<span>Sprachen lernen - Babel</span>
						</div>

						<div className='exercise'>
							<img src={calendar} alt="calendar-icon" />
							<p>Wöchentliche Aufgaben: 4/5</p>
						</div>
						<div className='stats'>
							<img src={user} alt="user-icon" /> <p>213 Punkte</p>
							<img src={users} alt="users-icon" /> <p>21.323 Punkte</p>
						</div>
					</div>
					<div className='box'>
						<div id='color4'></div>
						<div className='top'>
							<img src={codepen} alt="code-icon" className='icon' />
							<p>Geschichte</p>
							<span>Sprachen lernen - Babel</span>
						</div>

						<div className='exercise'>
							<img src={calendar} alt="calendar-icon" />
							<p>Wöchentliche Aufgaben: 4/5</p>
						</div>
						<div className='stats'>
							<img src={user} alt="user-icon" /> <p>213 Punkte</p>
							<img src={users} alt="users-icon" /> <p>21.323 Punkte</p>
						</div>
					</div>
					<div className='box'>
						<div id='color5'></div>
						<div className='top'>
							<img src={codeimg} alt="code-icon" className='icon' />
							<p>Politik</p>
							<span>Sprachen lernen - Babel</span>
						</div>

						<div className='exercise'>
							<img src={calendar} alt="calendar-icon" />
							<p>Wöchentliche Aufgaben: 4/5</p>
						</div>
						<div className='stats'>
							<img src={user} alt="user-icon" /> <p>213 Punkte</p>
							<img src={users} alt="users-icon" /> <p>21.323 Punkte</p>
						</div>
					</div>
					<div className='box'>

						<div id='color6'></div>
						<div className='top'>
							<img src={zap} alt="code-icon" className='icon' />
							<p>Physik</p>
							<span>Sprachen lernen - Babel</span>
						</div>

						<div className='exercise'>
							<img src={calendar} alt="calendar-icon" />
							<p>Wöchentliche Aufgaben: 4/5</p>
						</div>
						<div className='stats'>
							<img src={user} alt="user-icon" /> <p>213 Punkte</p>
							<img src={users} alt="users-icon" /> <p>21.323 Punkte</p>
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default Dashboard;
