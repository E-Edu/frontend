import React from 'react';
import './Dashboard.scss';
import Data from '../../lib/Colors';
import { Link } from 'react-router-dom';
import Query from '../../lib/api/Query';
import { gql } from 'apollo-boost';
import { Translation } from '../../i18n/i18n';
import Subject from '../../components/Subject/Subject.js';

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
                nameKey: 'german',
            },
            {
                nameKey: 'computerScience',
            },
            {
                nameKey: 'history',
            },
            {
                nameKey: 'politics',
            },
            {
                nameKey: 'physics',
            },
            {
                nameKey: 'biology',
            },
            {
                nameKey: 'chemistry',
            }
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

        console.log(result);
        subjects.push({
            displayName: result.data.subjectById.displayName,
        });

        // push our new states
        for (let subject of subjects) this.state.subjects.push(subject);

        // refresh the state
        this.setState(this.state);
    }

    renderSubjects() {
        return this.state.subjects.map((subject, index) => {
            return (
                <Link key={index} to="/task/lecture" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Subject
                        subject={Translation.t('subject.' + subject.nameKey + '.name')}
                        Underline={Translation.t('subject.' + subject.nameKey + '.description')}
                        color={Data['subjectColor'][subject.nameKey]}
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
                <div className="subjects-content">{this.renderSubjects()}</div>
            </div>
        );
    }
}

export default dashboard;
