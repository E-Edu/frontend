import React, { Component } from 'react';
import './index.scss';
import UsersIcon from "../../components/icons/users.icon.js";
import UserIcon from '../../components/icons/users.icon.js';

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
<<<<<<< HEAD
	state = {};
=======
	state = {};s
>>>>>>> add icons--add Picture--add Profile--add Tasklist--

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
<<<<<<< HEAD
							<div>
								<UserIcon/>
								<span>213</span><span>Punkte</span>
							</div>
                            <div>
								<UsersIcon/>
								<span>21.323</span><span>Punkte</span>
							</div>
=======
                            <img src={userIcon} alt="user"/>
							<span>213</span><span>Punkte</span>
							<img src={usersIcon} alt="users"/>
							<span>21.323</span><span>Punkte</span>
>>>>>>> add icons--add Picture--add Profile--add Tasklist--
                        </span>
                    </div>
					<div className='resultRight'>
                        <span className='resultSubject'>
<<<<<<< HEAD
                            <input type="search" id="site-search" name="Search" aria-label="Search" placeholder="Suche"/>
=======
                            <input id="" type="search" id="site-search" name="Search" aria-label="Search" placeholder="Suche"/>
>>>>>>> add icons--add Picture--add Profile--add Tasklist--
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
