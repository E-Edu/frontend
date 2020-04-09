import React from 'react';
import './Dashboard.scss';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import Query from '../../lib/api/Query';
import { Subject as SubjectModel } from '../../lib/api/model/Model';
import Subject from '../../components/Subject/Subject';
import * as H from 'history';

interface DashboardState {
    subjects?: SubjectModel[];
}

interface MatchParams {
    name: string;
}

interface DashboardRouter extends RouteComponentProps<MatchParams> {
}

// from typings
interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}


class dashboard extends React.Component<DashboardState, DashboardRouter> {
    constructor(props) {
        super(props);
        this.state = { subjects: [] };
    }

    state: DashboardState;

    componentDidMount() {
        this.loadSubjects();
        this.loadFakeData();
    }

    navigate(path) {
        this.props.history.push(`/${path}`);
    }

    loadFakeData() {
        this.state.subjects.push(
            { displayName: 'GERMAN' },
            { displayName: 'COMPUTERSCIENCE' },
            { displayName: 'HISTORY' },
            { displayName: 'POLITICS' },
            { displayName: 'PHYSICS' },
            { displayName: 'BIOLOGY' },
            { displayName: 'CHEMISTRY' },
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
        subjects.forEach(value => {
            this.state.subjects.push(value);
        });
    }

    renderSubjects() {
        return this.state.subjects.map((subject, index) => {
            return (
                <Link key={index} to="/task/lecture" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Subject
                        subject={subject.displayName}
                        desciption={subject.displayName}
                        color={subject.displayName}
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
