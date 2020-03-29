import React from 'react';
import './SubjectTask.scss';

import User from '../../assets/icons/user.svg';
import Users from '../../assets/icons/users.svg';
import { Link } from 'react-router-dom';
import { Translation } from '../../i18n/i18n';

class SubjectTask extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        currentQuestion: 4,
        maxQuestion: 10,
    };

    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    renderDescription(description) {
        return description.split('\n').map((value, index) => {
            return (
                <span key={index}>
                    {value}
                    <br />
                </span>
            );
        });
    }

    render() {
        //TODO: Pass these arguments
        const taskTitle = 'Äpfel und Birnen';
        const description =
            'Peter hat 3 Äpfel und 4 Birnen. Er gibt Lena 2 Äpfel und 1 Birne ab.\n' + 'Wieviele Äpfel hat Peter noch?';
        const subject = 'math';
        const lection = 'addition';

        return (
            <div>
                <div className="main">
                    <div className="subject-task subject-task">
                        <div className="subject-task-container">
                            <div className="subject-task-content-header">
                                <div className="subject-task-left">
                                    <span className="subject-task-subject">
                                        {Translation.t('subject.' + subject + '.name')}
                                    </span>
                                    <span className="subject-task-module">
                                        {Translation.t('lection.' + subject + '.' + lection + '.name')}
                                    </span>
                                </div>
                                <div className="subject-task-right">
                                    <div className="subject-task-points">
                                        <img src={User} alt="" />
                                        <p>
                                            <span> 213</span> {Translation.t('taskList.points')}
                                        </p>
                                    </div>
                                    <div className="subject-task-points">
                                        <img src={Users} alt="" />
                                        <p>
                                            <span> 21.323</span> {Translation.t('taskList.points')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="progress-display">
                                <span>
                                    {Translation.t('task.question')} 4 {Translation.t('task.of')} 10{' '}
                                </span>
                                <div className="progress-bar">
                                    <div
                                        className="progress-per"
                                        per="90"
                                        style={{
                                            width: `${(this.state.currentQuestion / this.state.maxQuestion) * 100}%`,
                                        }}
                                    />
                                </div>
                                <div className="subject-task-titel">
                                    <span>{taskTitle}</span>
                                </div>
                                <div className="subject-task-description">{this.renderDescription(description)}</div>
                            </div>
                            <div className="subject-task-answer">
                                <div className="subject-task.-answer-header">
                                    <span>{Translation.t('task.answer')}</span>
                                </div>
                                <div className="subject-task-answer-field">
                                    <input type="text" placeholder="test" />
                                </div>

                                <div className="subject-task-buttons">
                                    <Link to="/task/result" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button className="subject-task-skip">{Translation.t('task.skip')}</button>
                                    </Link>
                                    <Link to="/task/result" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button className="subject-task-next">{Translation.t('task.nextTask')}</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubjectTask;
