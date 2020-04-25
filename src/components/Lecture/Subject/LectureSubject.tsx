import React from 'react';
import './LectureSubject.scss';
import { Link } from 'react-router-dom';
import { Codepen } from 'react-feather';

interface LectureSubjectProps {
    name: string;
}

class LectureSubject extends React.Component<LectureSubjectProps> {
    render() {
        const { name } = this.props;
        return (
            <div className="lecture-subject-wrapper">
                <Link to="/task/list" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="lecture-subject">
                        <span className="icon-container">
                            <Codepen size="30" />
                        </span>
                        <p className="lecture-subject-title">{name}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default LectureSubject;
