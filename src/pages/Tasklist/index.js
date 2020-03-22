import React, { Component } from 'react';
import './index.scss';
import userIcon from '../../assets/icon_Profile/user.svg';
import usersIcon from '../../assets/icon_Profile/users.svg';

{/*class Task extends React.Component{
	render(){
		result(
			<div className="Task">
				<div className="Task-name">
					<span>{this.props.Name}</span>
				</div>
			</div>
		);
	}
}*/}

class Teacher_Task extends React.Component {

    render() {
        return (
            <div className="Tasklist_Content">
				<div className="teacher_information">
					<img alt='Profilbild' src="https://yt3.ggpht.com/a/AATXAJzQuI4-bNmqwbklzCjvm576_nZwSdpG5jX-Hw=s176-c-k-c0x00ffffff-no-rj-mo" />
					<span id="teacher_name">{this.props.teacher_name}</span>
				</div>
		</div>
        )
    }
}


class Tasklist extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {};s

	render() {
		return <div className="Tasklist">
				<div className='resultContentHeader'>
                    <div className='resultLeft'>
                        <span className='resultSubject'>
                            Task
                        </span>
                    </div>
					<div className='resultCenter'>
                        <span className='resultSubject'>
                            <img src={userIcon} alt="user"/>
							<span>213</span><span>Punkte</span>
							<img src={usersIcon} alt="users"/>
							<span>21.323</span><span>Punkte</span>
                        </span>
                    </div>
					<div className='resultRight'>
                        <span className='resultSubject'>
                            <input id="" type="search" id="site-search" name="Search" aria-label="Search" placeholder="Suche"/>
                        </span>
                    </div>
                </div>
				<div id="Task-Content-List">
					<Teacher_Task teacher_name="Hans Peter"/>
				</div>
		</div>;
	}
}

export default Tasklist;
