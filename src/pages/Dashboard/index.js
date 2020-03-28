import React from "react";
import "./index.scss";
import CalenderIcon from "../../components/icons/calender.icon.js";
import UserIcon from "../../components/icons/user.icon";
import UsersIcon from "../../components/icons/users.icon";
import Data from "../../lib/Color_Config";
import File from "../../components/icons/file-text.icon.js";
import {Link} from "react-router-dom";
import Query from "../../lib/api/Query";
import {gql} from "apollo-boost";
import {Translation} from "../../i18n/i18n";

class Subjekt extends React.Component {
    render() {
        const subject = this.props.subject;
        const color = this.props.color;
        const border = "0.73333335rem solid " + color;

        return (
            <div className='Subjekt' style={{borderLeft: border}}>
                <div className="image">
                    <File strokewidth="1.5" className="icon" width="30" height="30" stroke="#000000"/>
                </div>
                <div className="box-content">
                    <h3 className="subject_name">{subject}</h3>
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
                nameKey: "german",
                displayName: Translation.t("subject.german.name"),
                description: "Sprachen lernen - Babel"
            },
            {
                nameKey: "computerScience",
                displayName: Translation.t("subject.computerScience.name"),
                description: "0110011111000101110001010100011111011"
            },
            {
                nameKey: "history",
                displayName: Translation.t("subject.history.name"),
                description: "I have a dream..."
            },
            {
                nameKey: "politics",
                displayName: Translation.t("subject.politics.name"),
                description: "Du Schaffst da"
            },
            {
                nameKey: "physics",
                displayName: Translation.t("subject.physics.name"),
                description: "Wieso wirfst du mir den Apfel auf den Kopf?!"
            },
            {
                nameKey: "biology",
                displayName: Translation.t("subject.biology.name"),
                description: "Hast du meine Pantoffeltierchen gesehen?"
            },
            {
                nameKey: "chemistry",
                displayName: Translation.t("subject.chemistry.name"),
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
            return  <Link key={index} to='/task/lecture' style={{textDecoration: 'none', color: "inherit"}}>
                        <Subjekt subject={Translation.t("subject." + subject.nameKey + ".name")}
                                 Underline={subject.description}
                                 color={Data["subjectColor"][subject.nameKey]}
                                 Weekendtask="4/5"
                                 Points="213"
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
