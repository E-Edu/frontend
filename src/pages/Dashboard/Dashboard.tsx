import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import Subject from '../../components/Subject/Subject';
import Query from '../../lib/api/Query';

class dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { subjects: [] };
    }

    componentDidMount() {
        this.loadSubjects();
        this.loadFakeData();
    }

    navigate(path) {
        this.props.history.push(`/${path}`);
    }

    loadFakeData() {
        this.state.subjects.push(
            { nameKey: 'GERMAN' },
            { nameKey: 'COMPUTERSCIENCE' },
            { nameKey: 'HISTORY' },
            { nameKey: 'POLITICS' },
            { nameKey: 'PHYSICS' },
            { nameKey: 'BIOLOGY' },
            { nameKey: 'CHEMISTRY' }
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

        // TODO: Check graphql to fix
        // eslint-disable-next-line
        subjects.push({ displayName: result.data.subjectById.displayName });

        // refresh the state
        this.setState((state) => ({
            subjects: state.subjects.concat(subjects),
        }));
    }

    renderSubjects() {
        return this.state.subjects.map((subject, index) => {
            return (
                <Link key={index} to="/task/lecture" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Subject
                        subject={subject.nameKey}
                        desciption={subject.nameKey}
                        color={subject.nameKey}
                        weekendtask="4/5"
                        points="213"
                        community_Points="21.323"
                    />
                </Link>
            );
        });
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
