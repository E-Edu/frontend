import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { observer } from 'mobx-react';
import Query from '../../lib/api/Query';
import { Subject as SubjectModel } from '../../lib/api/model/Model';
import Subject from '../../components/Subject/Subject';
import DashboardStore from '../../store/dashboard.store';

const dashboardStore = new DashboardStore();

@observer
class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.loadSubjects();
        this.loadFakeData();
    }

    /* componentDidMount() {
        this.loadSubjects();
        this.loadFakeData();
    } */

    loadFakeData() {
        dashboardStore.setSubjects([
            { displayName: 'GERMAN' },
            { displayName: 'COMPUTERSCIENCE' },
            { displayName: 'HISTORY' },
            { displayName: 'POLITICS' },
            { displayName: 'PHYSICS' },
            { displayName: 'BIOLOGY' },
            { displayName: 'CHEMISTRY' },
        ]);
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
        dashboardStore.addSubjects(subjects);
    }

    renderSubjects() {
        return dashboardStore.subjects.map((subject, index) => {
            return (
                <Link key={index} to="/task/lecture" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Subject
                        subject={subject.displayName}
                        desciption={subject.displayName}
                        color={subject.displayName}
                        weekendtask="4/5"
                        points="213"
                        communityPoints="21.323"
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

export default Dashboard;
