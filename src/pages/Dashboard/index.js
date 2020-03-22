import React, { Component } from 'react';
import './index.css';
import Header from '../../components/Header';
import Home_icon from './src/Assets/icons/home.svg';
import Task_icon from '../../Assets/icons/alert-circle.svg';

class Template extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
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
					<div className='box'>
						<div className='image'>
							<img src='' alt='fach_logo' />
						</div>
						<div className='box-content'>
							<h3 className='subject_name'></h3>
							<span className='under_name'></span>
							<div className='weekend_task'>
								<img className='Calender_icon' src='' alt='KAlender Icon' />
								<span className='weekend_task_text'></span>
							</div>
							<div className='points'>
								<div className='user_points'>
									<img src='' alt='user_icon' className='user_points_image' />
									<span className='user_text'></span>
								</div>
								<div className='community_points'>
									<img
										src=''
										alt='community_icon'
										className='community_points_image'
									/>
									<span className='community_text'></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Template;
