import React from 'react';
import './TaskList.scss';
import UsersIcon from '../../components/icons/user.icon.js';
import UserIcon from '../../components/icons/users.icon.js';
import Search from '../../components/icons/search.icon';
import { Link } from 'react-router-dom';
import { Translation } from '../../i18n/i18n';
import Task from '../Task/Task';
import IconText from '../../components/IconText/IconText';

class TaskList extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        search: '',
        tasks: [],
    };

    OnChangeSearch = () => {
        this.state.search(document.getElementById('site-search').value);
        //TODO: Backend request
        this.setState(this.state);
    };

    loadFakeData() {
        this.state.tasks.push(
            {
                description: 'A short description what to do in this task',
                difficulty: 'easy',
            },
            {
                description: 'A short description what to do in this task',
                difficulty: 'medium',
            },
            {
                description: 'A short description what to do in this task',
                difficulty: 'hard',
            }
        );

        this.setState(this.state);
    }

    componentDidMount() {
        this.loadFakeData();
    }

    renderTasks() {
        return this.state.tasks.map((task, index) => {
            console.log('Task', task);
            return (
                <Link key={index} to="/task/subject" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Task
                        name={Translation.t('taskList.task') + ' ' + (index + 1)}
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
                                <IconText
                                    text={'213 ' + Translation.t('taskList.points')}
                                    position="left"
                                    class="result-subject"
                                    fontColor="#3A506B">
                                    <UsersIcon className="icon" stroke="#3A506B" />
                                </IconText>
                            </div>
                            <div className="result-center second">
                                <IconText
                                    text={'21.323 ' + Translation.t('taskList.points')}
                                    position="left"
                                    class="result-subject"
                                    fontColor="#3A506B">
                                    <UserIcon className="icon" stroke="#3A506B" />
                                </IconText>
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
