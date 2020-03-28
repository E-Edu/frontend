import React from "react";
import "./index.scss";
import CalenderIcon from "../../components/icons/calender.icon.js";
import UserIcon from "../../components/icons/user.icon";
import UsersIcon from "../../components/icons/users.icon";
import Data from "../../lib/Color_Config";
import File from "../../components/icons/file-text.icon.js";
import {Link} from "react-router-dom";
import Query from "../../lib/api/Query";
import {Subject} from "../../lib/api/model/Model";
import {gql} from "apollo-boost";

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

    state = {
        subjects: [],
    };

    navigate(path) {
        this.props.history.push(`/${path}`);
    }

    loadFakeData() {
        this.state.subjects.push(
            {
                displayName: "Deutsch",
                description: "Sprachen lernen - Babel"
            },
            {
                displayName: "Informatik",
                description: "0110011111000101110001010100011111011"
            },
            {
                displayName: "Geschichte",
                description: "I have a dream..."
            },
            {
                displayName: "Politik",
                description: "Du Schaffst da"
            },
            {
                displayName: "Physik",
                description: "Wieso wirfst du mir den Apfel auf den Kopf?!"
            },
            {
                displayName: "Biologie",
                description: "Hast du meine Pantoffeltierchen gesehen?"
            },
            {
                displayName: "Chemie",
                description: "Die Chemie stimmt"
            },
        );
    }

    async loadSubjects() {
        let subjects = [];
        let result = await Query.queryGQL(gql`
            query {
                subjectById(subjectId: 0) {
                    displayName
                }
            }
        `);

        console.log(result)
        subjects.push({
            displayName: result.data.subjectById.displayName,
            description: "<Fetched>"
        });

        // push our new states
        for (let subject of subjects)
            this.state.subjects.push(subject);

        // refresh the state
        this.setState(this.state);
    }

    renderSubjects() {
        return this.state.subjects.map((subject, index) => {
            return <Link key={index} to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt Subject={subject.displayName} Underline={subject.description} Weekendtask="4/5" Points="213"
                         Community_Points="21.323"/>
                    </Link>
        });
    }

    componentDidMount() {
        this.loadSubjects();
        this.loadFakeData();
    }

    render() {
        return (
            <div id="dashboard">
                <div className="Subjekts_content">
                    {this.renderSubjects()}
                </div>
            </div>
        );
    }
}

export default dashboard;
