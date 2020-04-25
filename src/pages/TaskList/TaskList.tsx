import React from 'react';
import './TaskList.scss';
import { Link } from 'react-router-dom';
import { User, Users } from 'react-feather';
import { observer } from 'mobx-react';
import { t } from '../../i18n/i18n';
import Task from '../../components/Task/Task/Task';
import IconText from '../../components/IconText/IconText';
import TextInput from '../../components/Input/TextBox/TextInput';
import { DifficultyEnum } from '../../models/difficulty.enum';
import TaskListStore from '../../store/taskList.store';

const taskListStore = new TaskListStore();

@observer
class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.loadFakeData();
    }

    OnChangeSearch = (event) => {
        // TODO: Backend request
        this.setState({ search: event.target.value });
        taskListStore.setSearch(event.target.value);
        // FIXME: Adds just new entries
        this.loadFakeData();
    };

    loadFakeData() {
        this.setState((task) => ({ task }));
        taskListStore.addTasks([
            {
                description: 'A short description what to do in this task',
                difficulty: DifficultyEnum.EASY,
                id: 'ee035b07-b1b1-43e8-a5a7-13ecba5eaa50',
            },
            {
                description: 'A short description what to do in this task',
                difficulty: DifficultyEnum.MEDIUM,
                id: 'c0764f51-6c75-44d7-a16f-77cfcce1672f',
            },
            {
                description: 'A short description what to do in this task',
                difficulty: DifficultyEnum.HARD,
                id: 'eacbd1ab-5c8b-49dc-b68e-223b7746fa93',
            },
        ]);
    }

    renderTasks() {
        const indexSubstituent = 1;
        return taskListStore.tasks.map((task, index) => {
            return (
                <Link key={task.id} to="/task/subject" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Task
                        name={`${t.t('taskList.task')} ${index + indexSubstituent}`}
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
                            <span className="result-subject">{t.t('page.taskList.task', 'Questions')}</span>
                        </div>

                        <div className="middle">
                            <div className="result-center">
                                <IconText
                                    text={`213 ${t.t('page.taskList.points', 'Points')}`}
                                    position="left"
                                    class="result-subject"
                                    fontColor="#3A506B">
                                    <Users className="icon" color="#3A506B" />
                                </IconText>
                            </div>
                            <div className="result-center second">
                                <IconText
                                    text={`21.323 ${t.t('page.taskList.points', 'Points')}`}
                                    position="left"
                                    class="result-subject"
                                    fontColor="#3A506B">
                                    <User className="icon" color="#3A506B" />
                                </IconText>
                            </div>
                        </div>
                        <div className="result-right">
                            <span className="result-subject">
                                <TextInput placeholder={t.t('page.taskList.search', 'Search')} />

                                {/* TODO: implement Search icon <Search size="30" color="#3a506b"/> */}
                            </span>
                        </div>
                    </div>
                    <div className="task-content-list">{this.renderTasks()}</div>
                </div>
            </div>
        );
    }
}

export default TaskList;
