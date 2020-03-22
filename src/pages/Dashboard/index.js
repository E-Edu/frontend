import React, { Component } from 'react';
import './index.scss';
import Header from '../../components/Header';
/*import Home_icon from './src/Assets/icons/home.svg';*/
import Task_icon from '../../Assets/icons/alert-circle.svg';
import Sidebar from '../../components/Sidebar';

class Template extends Component {
	constructor(props) {
		super(props);
	}
	state = {};

	render() {
		return (
			<div className='dashboard'>
				<Header side='Dashboard' />
				{/*<Sidebar></Sidebar>*/}
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
