import React, {Component} from "react";
import "./index.scss";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

class Template extends Component {
    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div>
                <Header side='Dashboard'/>
                <Sidebar active="dashboard"/>
                <div className="dashboard" id="main">
                    <div className="content">
                        <div className="box">
                            <div className="image">
                                <img src="" alt="fach_logo"/>
                            </div>
                            <div className="box-content">
                                <h3 className="subject_name"/>
                                <span className="under_name"/>
                                <div className="weekend_task">
                                    <img
                                        className="Calender_icon"
                                        src=""
                                        alt="Kalender Icon"
                                    />
                                    <span className="weekend_task_text"/>
                                </div>
                                <div className="points">
                                    <div className="user_points">
                                        <img
                                            src=""
                                            alt="user_icon"
                                            className="user_points_image"
                                        />
                                        <span className="user_text"/>
                                    </div>
                                    <div className="community_points">
                                        <img
                                            src=""
                                            alt="community_icon"
                                            className="community_points_image"
                                        />
                                        <span className="community_text"/>
                                    </div>
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
