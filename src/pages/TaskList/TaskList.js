import React from 'react';
import './TaskList.scss';
import { Link } from 'react-router-dom';
import UsersIcon from '../../components/icons/user.icon.js';
import UserIcon from '../../components/icons/users.icon.js';
import Award from '../../components/icons/award.icon';
import Search from '../../components/icons/search.icon';
import DifficultyLabel from '../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';
import { Link } from 'react-router-dom';
import { Translation } from '../../i18n/i18n';

class Task extends React.Component {
    render() {
        const name = this.props.name;
        const description = this.props.description;
        const questions = this.props.questions;
        const rightQuestions = this.props.rightQuestions;

        return (
            <div className="task">
                <div className="task-head">
                    <span>{name}</span>
                    <div className="task-head-elements">
                        <div className="task-element">
                            <span>{questions}</span>
                            <span>{Translation.t('taskList.questions')}</span>
                        </div>
                        <div className="task-element">
                            <Award className="icon" stroke="#3A506B" />
                            <span>{rightQuestions}</span>
                        </div>
                        <DifficultyLabel difficulty={this.props.difficulty}/>
                    </div>
                </div>
                <div className="task-bottom">
                    <span>{description}</span>
                </div>
            </div>
        );
    }
}

class TaskList extends React.Component {
    state = { search: '', tasks: [] };

    OnChangeSearch = () => {
        this.state.search(document.getElementById('site-search').value);
        // TODO: Backend request
        this.setState(this.state);
        this.loadFakeData();
    };

    loadFakeData() {
        this.state.tasks.push(
            { description: 'A short description what to do in this task', difficulty: 'easy' },
            { description: 'A short description what to do in this task', difficulty: 'medium' },
            { description: 'A short description what to do in this task', difficulty: 'hard' }
        );

        this.setState(this.state);
    }

    renderTasks() {
        return this.state.tasks.map((task, index) => {
            return (
                <Link key={index} to="/task/subject" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Task
                        name={`${Translation.t('taskList.task')} ${index + 1}`}
                        questions="12"
                        rightQuestions="10"
                        difficulty={task.difficulty}
                        description={task.description}
                    />
                </Link>
            );
        });
    }

    render() {
        return (
            <div>
                <div className="task-list main">
                    <div className="result-content-header">
                        <div className="result-left">
                            <span className="result-subject">{Translation.t('taskList.task')}</span>
                        </div>

                        <div className="middle">
                            <div className="result-center">
                                <div className="result-subject">
                                    <UsersIcon className="icon" stroke="#3A506B" />
                                    <span className="points">213</span>
                                    <span className="points">{Translation.t('taskList.points')}</span>
                                </div>
                            </div>
                            <div className="result-center second">
                                <div className="result-subject">
                                    <UserIcon className="icon" stroke="#3A506B" />

                                    <span className="points">21.323</span>
                                    <span className="points">{Translation.t('taskList.points')}</span>
                                </div>
                            </div>
                        </div>
                        <div className="result-right">
                            <span className="result-subject">
                                <div id="input-search">
                                    <Search height="30" width="30" />
                                    <input
                                        onChange={this.OnChangeSearch}
                                        type="text"
                                        className="site-search"
                                        name="search"
                                        aria-label="Search"
                                        placeholder={Translation.t('taskList.search')}
                                    />
                                </div>
                            </span>
                        </div>
                    </div>

                    <div id="task-content-list">{this.renderTasks()}</div>
                </div>
            </div>
        );
    }
}

export default TaskList;
