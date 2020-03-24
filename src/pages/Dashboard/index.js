import React, {Component} from "react";
import "./index.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CalenderIcon from "../../components/icons/calender.icon.js";
import UserIcon from "../../components/icons/user.icon";
import UsersIcon from "../../components/icons/users.icon";
import Data from "../../lib/Subjekt_Config";
import File from "../../components/icons/file-text.icon.js";

class Subjekt extends React.Component{

    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        const subject = this.props.Subject;
        const border = "11px solid " + Data["Subject_color"][subject];
        return(<div className='Subjekt' style={{borderLeft: border}}>
            <div className="image">
                    <File stroke="#000000" />
            </div>
            <div className="box-content">
                <h3 className="subject_name">{this.props.Subject}</h3>
                <span className="under_name">{this.props.Underline}</span>
                <div className="weekend_task flex-row">
                    <CalenderIcon stroke="#000000" />
                    <span>Wöchentliche Aufgaben</span>
                    <span className="weekend_task_text">{this.props.Weekendtask}</span>
                </div>
                <div className="points">
                    <div className="user_points flex-row">
                        <UserIcon stroke="#000000"/>
                        <span className="user_Points">{this.props.Points}</span>
                        <span>Punkte</span>
                    </div>
                    <div className="community_points flex-row">
                        <UsersIcon stroke="#000000"/>
                        <span className="community_Points">{this.props.Community_Points}</span>
                        <span>Punkte</span>
                    </div>
                </div>
            </div>
        </div>);
    }
}

class dashboard extends React.Component {
    componentDidMount() {
        const top = document.getElementsByClassName('headerNavbar')[0].clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('dashboard').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div id="dashboard">
                <Header side="Dashboard" />
                <Sidebar />
                <div className="content">
                    <Subjekt Subject="Deutsch" Underline="Sprachen lernen - Babel" Weekendtask="4/5" Points="213" Community_Points="21.323"/>
                </div>
            </div>
        );
    }
}

export default dashboard;
