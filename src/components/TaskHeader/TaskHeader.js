import React from 'react';
import './TaskHeader.scss';
import { User, Users } from 'react-feather';

class TaskHeader extends React.Component {
    render() {
        return (
            <div className="task-header">
                <div className="lecture-header">
                    <div className="lecture-header-topic">
                        <span className="lecture-subject">{this.props.module}</span>
                    </div>
                    <div className="lecture-header-points">
                        <div className="lecture-points">
                            <User />
                            <p className="lecture-point-text">
                                <span>213</span> Punkte
                            </p>
                        </div>
                        <div className="lecture-points">
                            <Users />
                            <p className="lecture-point-text">
                                <span>21.323</span> Punkte
                            </p>
                        </div>
                    </div>

                    <div className="lecture-header-search">
                        <input type="text" placeholder="Suche" className="input" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskHeader;
