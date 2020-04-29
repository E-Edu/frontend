import React from 'react';
import './SubjectTask.scss';
import { Link } from 'react-router-dom';
import { User, Users } from 'react-feather';
import { observer } from 'mobx-react';
import { t } from '../../i18n/i18n';
import SubjectTaskStore from '../../store/subjectTask.store';

const subjectTaskStore = new SubjectTaskStore();

@observer
class SubjectTask extends React.Component {
    results = ['#BA1919', '#19ba3f', '#687D9A', '#687D9A', '#19BA3f'];

    renderDescription(description) {
        return description.split('\n').map((value) => {
            return <span key={value}>{value}</span>;
        });
    }

    render() {
        // TODO: Pass these arguments
        const taskTitle = 'Äpfel und Birnen';
        const description =
            'Peter hat 3 Äpfel und 4 Birnen. Er gibt Lena 2 Äpfel und 1 Birne ab.\n Wieviele Äpfel hat Peter noch?';
        const subject = 'math';
        const lection = 'addition';
        const percentMultiplicator = 100;
        return (
            <div>
                <div className="main">
                    <div className="subject-task subject-task">
                        <div className="subject-task-container">
                            <div className="subject-task-content-header">
                                <div className="subject-task-left">
                                    {/* TODO: Fix the translations */}
                                    <span className="subject-task-subject">{t.t(`subject.${subject}.name`)}</span>
                                    <span className="subject-task-module">
                                        {t.t(`lection ${subject}.${lection}.name`)}
                                    </span>
                                </div>
                                <div className="subject-task-right">
                                    <div className="subject-task-points">
                                        <User />
                                        <p>
                                            <span> 213</span> {t.t('taskList.points')}
                                        </p>
                                    </div>
                                    <div className="subject-task-points">
                                        <Users />
                                        <p>
                                            <span> 21.323</span> {t.t('taskList.points')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="progress-display">
                                <span>
                                    {t.t('task.question')} 4{t.t('task.of')} 10 10{' '}
                                </span>
                                <div className="progress-bar">
                                    <div
                                        className="progress-per"
                                        style={{
                                            width: `${
                                                (subjectTaskStore.currentQuestion / subjectTaskStore.maxQuestion) *
                                                percentMultiplicator
                                            }%`,
                                        }}
                                    />
                                </div>
                                <div className="subject-task-titel">
                                    <span>{taskTitle}</span>
                                </div>
                                <div className="subject-task-description">{this.renderDescription(description)}</div>
                            </div>
                            <div className="subject-task-answer">
                                <div className="subject-task-answer-header">
                                    <span>{t.t('task.answer')}</span>
                                </div>
                                <div className="subject-task-answer-field">
                                    <input type="text" placeholder="test" />
                                </div>

                                <div className="subject-task-buttons">
                                    <Link to="/task/result" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button className="subject-task-skip" type="button">
                                            {t.t('task.skip')}
                                        </button>
                                    </Link>
                                    <Link to="/task/result" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button className="subject-task-next" type="button">
                                            {t.t('task.nextTask')}
                                        </button>
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
