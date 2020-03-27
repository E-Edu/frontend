import React from "react";
import "./index.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import CalenderIcon from "../../components/icons/calender.icon.js";
import UserIcon from "../../components/icons/user.icon";
import UsersIcon from "../../components/icons/users.icon";
import Data from "../../lib/Color_Config";
import File from "../../components/icons/file-text.icon.js";
import {Link} from "react-router-dom";

class Subjekt extends React.Component {
    render() {
        const subject = this.props.Subject;
        const border = "0.73333335rem solid " + Data["Subject_color"][subject];
        return (
            <div className='Subjekt' style={{borderLeft: border}}>
                <div className="image">
                    <File strokewidth="1.5" className="icon" width="30" height="30" stroke="#000000"/>
                </div>
                <div className="box-content">
                    <h3 className="subject_name">{this.props.Subject}</h3>
                    <span className="under_name">{this.props.Underline}</span>
                    <div className="weekend_task flex-row">
                        <CalenderIcon id="calender" width="27" height="27" stroke="#000000"/>
                        <span>Wöchentliche Aufgaben</span>
                        <span className="weekend_task_text">{this.props.Weekendtask}</span>
                    </div>
                    <div className="points">
                        <div className="user_points flex-row">
                            <UserIcon stroke="#000000" width="27" height="27"/>
                            <span className="pointText">
                                <span className="user_Points">{this.props.Points}</span>
                                <span>Punkte</span>
                            </span>
                        </div>
                        <div className="community_points flex-row">
                            <UsersIcon stroke="#000000" width="27" height="27"/>
                            <span className="pointText">
                                <span className="community_Points">{this.props.Community_Points}</span>
                                <span>Punkte</span>
                            </span>
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
        document.getElementById('dashboard').setAttribute("style", `margin-top:${top}px;margin-left:${left} - 3px);`);
    }


    navigate(path) {
        this.props.history.push(`/${path}`);
    }

    render() {
        return (
            <div id="dashboard">
                <Header side="Dashboard"/>
                <Sidebar active="dashboard"/>
                <div className="Subjekts_content">
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Deutsch" Underline="Sprachen lernen - Babel" Weekendtask="4/5" Points="213"
                                 Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Mathe" Underline="1 x  3 macht 4 und 3 macht 9" Weekendtask="4/5" Points="213"
                                 Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Informatik" Underline="0110011111000101110001010100011111011" Weekendtask="4/5" Points="213"
                                 Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Geschichte" Underline="I have a dream..." Weekendtask="4/5" Points="213"
                                 Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Politik" Underline="Du Schaffst das" Weekendtask="4/5" Points="213" Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Physik" Underline="Underline" Weekendtask="4/5" Points="213" Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Biologie" Underline="Underline" Weekendtask="4/5" Points="213" Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Religion" Underline="Underline" Weekendtask="4/5" Points="213" Community_Points="21.323"/>
                    </Link>
                    <Link to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject="Chemie" Underline="Underline" Weekendtask="4/5" Points="213" Community_Points="21.323"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default dashboard;
