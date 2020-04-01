import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Calendar, File, User, Users } from 'react-feather';
import Data from '../../lib/Colors';
import Query from '../../lib/api/Query';
import { Translation } from '../../i18n/i18n';

class Subjekt extends React.Component {
    render() {
        const { subject } = this.props;
        const { color } = this.props;
        const border = `0.73333335rem solid ${color}`;

        return (
            <div className="subjekt" style={{ borderLeft: border }}>
                <div className="image">
                    <File className="icon" size="30" color="#000000" />
                </div>
                <div className="box-content">
                    <h3 className="subject-name">{subject}</h3>
                    <span className="under-name">{this.props.Underline}</span>
                    <div className="weekend-task flex-row">
                        <Calendar className="calender" size="27" color="#000000" />
                        <span>Wöchentliche Aufgaben</span>
                        <span className="weekend-task-text">{this.props.Weekendtask}</span>
                    </div>
                    <div className="points">
                        <div className="user-points flex-row">
                            <User color="#000000" size="27" />
                            <span className="point-text">
                                <span className="user-points">{this.props.Points}</span>
                                <span>Punkte</span>
                            </span>
                        </div>
                        <div className="community-points flex-row">
                            <Users color="#000000" size="27" />
                            <span className="point-text">
                                <span className="community-points">{this.props.Community_Points}</span>
                                <span>Punkte</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class dashboard extends React.Component {
    state = { subjects: [] };

    navigate(path) {
        this.props.history.push(`/${path}`);
    }

    loadFakeData() {
        this.state.subjects.push(
            { nameKey: 'german' },
            { nameKey: 'computerScience' },
            { nameKey: 'history' },
            { nameKey: 'politics' },
            { nameKey: 'physics' },
            { nameKey: 'biology' },
            { nameKey: 'chemistry' }
        );
    }

    async loadSubjects() {
        const subjects = [];
        const result = await Query.queryGQL(gql`
            query {
                subjectById(subjectId: 0) {
                    displayName
                }
            }
        `);

        subjects.push({ displayName: result.data.subjectById.displayName });

        // push our new states
        for (const subject of subjects) this.state.subjects.push(subject);

        // refresh the state
        this.setState(this.state);
    }

    renderSubjects() {
        return this.state.subjects.map((subject, index) => {
            return (
                <Link key={index} to="/task/lecture" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Subjekt
                        subject={Translation.t(`subject.${subject.nameKey}.name`)}
                        Underline={Translation.t(`subject.${subject.nameKey}.description`)}
                        color={Data.subjectColor[subject.nameKey]}
                        Weekendtask="4/5"
                        Points="213"
                        Community_Points="21.323"
                    />
                </Link>
            );
        });
    }

    componentDidMount() {
        this.loadSubjects();
        this.loadFakeData();
    }

    render() {
        return (
            <div className="dashboard">
                <div className="subjekts-content">{this.renderSubjects()}</div>
            </div>
        );
    }
}

export default dashboard;
