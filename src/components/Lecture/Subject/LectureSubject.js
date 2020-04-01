import React from 'react';
import './LectureSubject.scss';
import { Link } from 'react-router-dom';
import { Codepen } from 'react-feather';

class LectureSubject extends React.Component {
    render() {
        return (
            <div className="lecture-subject-wrapper">
                <Link to="/task/list" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="lecture-subject">
                        <span className="icon-container">
                            <Codepen size="30" />
                        </span>
                        <p className="lecture-subject-title">{this.props.name}</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default LectureSubject;
