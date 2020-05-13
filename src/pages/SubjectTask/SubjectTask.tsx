import React from 'react';
import './SubjectTask.scss';
import { Link } from 'react-router-dom';
import { User, Users } from 'react-feather';
import { observer } from 'mobx-react';
import { t } from '../../i18n/i18n';
import SubjectTaskStore from '../../store/subjectTask.store';
import Task from '../../models/task/task';
import { DifficultyEnum } from '../../models/difficulty.enum';
import Question from '../../models/task/question';

const subjectTaskStore = new SubjectTaskStore();

@observer
class SubjectTask extends React.Component {
    constructor(props) {
        super(props);
        subjectTaskStore.loadTask(this.getFakeData());
    }

    getFakeData(): Task {
        return {
            title: 'Plusrechenen für Einsteiger',
            description: 'Hier lernst du, wie du Plusrechnen kannst',
            selectedDifficulty: DifficultyEnum.EASY,
            lecture: 'addition',
            subject: 'math',
            questions: [
                {
                    title: 'Äpfel und Birnen',
                    description:
                        'Peter hat 3 Äpfel und 4 Birnen. Er gibt Lena 2 Äpfel und 1 Birne ab.\n Wie viele Äpfel hat Peter noch?',
                    answers: [
                        { value: '1', selected: false },
                        { value: '2', selected: false },
                        { value: '3', selected: false },
                        { value: '4', selected: false },
                    ],
                },
                {
                    title: 'Äpfel und Birnen 2',
                    description:
                        'Peter hat 5 Äpfel und 7 Birnen. Er gibt Lena 3 Äpfel und 4 Birne ab.\n Wieviele Birnen hat Peter noch?',
                    answers: [
                        { value: '1', selected: false },
                        { value: '2', selected: false },
                        { value: '3', selected: false },
                        { value: '4', selected: false },
                    ],
                },
            ],
        };
    }

    sendAnswer() {
        // TODO call backend api
    }

    renderDescription(description) {
        return description.split('\n').map((value) => {
            return <p key={value}>{value}</p>;
        });
    }

    render() {
        const percentMultiplicator = 100;
        const indexAdditor = 1;
        const currentQuestion: Question = subjectTaskStore.questions[subjectTaskStore.currentQuestion];
        return (
            <div>
                <div className="main">
                    <div className="subject-task">
                        <div className="container">
                            <div className="content-header">
                                <div className="left">
                                    {/* TODO: Fix the translations */}
                                    <span className="task-subject">
                                        {t.t(`subject.${subjectTaskStore.subject}.name`)}
                                    </span>
                                    <span className="module">
                                        {t.t(
                                            `lection.${subjectTaskStore.subject}.${subjectTaskStore.lecture}.name`,
                                            'lection'
                                        )}
                                    </span>
                                </div>
                                <div className="right">
                                    <div className="points">
                                        <User />
                                        <p>
                                            <span> 213</span> {t.t('taskList.points')}
                                        </p>
                                    </div>
                                    <div className="points">
                                        <Users />
                                        <p>
                                            <span> 21.323</span> {t.t('taskList.points')}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="progress-display">
                                <span>
                                    {`${t.t('task.question')} ${subjectTaskStore.currentQuestion + indexAdditor} ${t.t(
                                        'task.of'
                                    )} ${subjectTaskStore.maxQuestion}`}
                                </span>
                                <div className="bar">
                                    <div
                                        className="per"
                                        style={{
                                            width: `${
                                                (subjectTaskStore.currentQuestion +
                                                    indexAdditor / subjectTaskStore.maxQuestion) *
                                                percentMultiplicator
                                            }%`,
                                        }}
                                    />
                                </div>
                                <div className="title">
                                    <span>{currentQuestion.title}</span>
                                </div>
                                <div className="description">{this.renderDescription(currentQuestion.description)}</div>
                            </div>
                            <div className="answer">
                                <div className="header">
                                    <span>{t.t('task.answer')}</span>
                                </div>
                                <div className="fields">
                                    {currentQuestion.answers.map((answer, index) => {
                                        return (
                                            <div className="fields" key={answer.value}>
                                                {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
                                                <p
                                                    onClick={() => subjectTaskStore.toggleAnswerSelection(index)}
                                                    className={`field ${
                                                        answer.selected ? 'field-active' : 'field-inactive'
                                                    }`}>
                                                    {answer.value}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="buttons">
                                    <Link to="/task/result" style={{ textDecoration: 'none', color: 'inherit' }}>
                                        <button className="skip" type="button">
                                            {t.t('task.skip')}
                                        </button>
                                    </Link>
                                    {subjectTaskStore.currentQuestion < subjectTaskStore.maxQuestion - indexAdditor ? (
                                        <button
                                            className="next"
                                            type="button"
                                            onClick={() => {
                                                subjectTaskStore.nextQuestion();
                                            }}>
                                            {t.t('task.nextTask', 'Next Task')}
                                        </button>
                                    ) : (
                                        <Link to="/task/result">
                                            <button
                                                className="next"
                                                type="button"
                                                onClick={() => {
                                                    this.sendAnswer();
                                                }}>
                                                {t.t('task.sendAnswers', 'Send Answers')}
                                            </button>
                                        </Link>
                                    )}
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
