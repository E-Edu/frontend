import React from 'react';
import './AddTask.scss';
import { observer } from 'mobx-react';
import { Plus } from 'react-feather';
import PageHeader from '../../components/Page/Header/PageHeader';
import { t } from '../../i18n/i18n';
import Button from '../../components/ui/button/Button';
import TextInput from '../../components/Input/TextBox/TextInput';
import AddQuestion from '../../components/Task/Add/Question/AddQuestion';
import ComboBox from '../../components/ui/ComboBox/ComboBox';
import AddTaskStore from '../../store/addTask.store';
import DifficultyLabel from '../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';
import { DifficultyEnum } from '../../models/difficulty.enum';

interface Task {
    Name: string;
    Subjekt: string;
    Module: string;
    difficulty: string;
}

const addTaskStore = new AddTaskStore();

@observer
class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.addQuestionHandler();
    }

    addQuestionHandler = () => {
        addTaskStore.addTaskListItem({ title: '', description: '', answers: [{ value: '', selected: false }] });
    };

    render() {
        const testTask: Task = {
            Module: 'TestModule',
            Name: 'TestName',
            Subjekt: 'TestSubjekt',
            difficulty: 'easy',
        };

        return (
            <div className="add-task">
                <div className="flex-row-box">
                    <PageHeader mainTitle={t.t('page.addTask.title', 'Create new task')} />
                    <Button styleType="primary" name={t.t('page.addTask.publish', 'publish')} />
                </div>
                <div className="flex-row-box">
                    <TextInput
                        placeholder={t.t('page.addTask.packageTitle', 'Task package title')}
                        onChange={(value) => addTaskStore.setTitle(value)}
                    />
                    <ComboBox
                        data={['Test1', 'Test2']}
                        height="1.6rem"
                        width="20rem"
                        callbackValue={(value: string) => {
                            addTaskStore.setSelectedSubject(value);
                        }}
                        value={addTaskStore.selectedSubject}
                    />
                </div>
                <div className="flex-row-box">
                    <DifficultyLabel difficulty={DifficultyEnum.EASY} />
                    <DifficultyLabel difficulty={DifficultyEnum.MEDIUM} />
                    <DifficultyLabel difficulty={DifficultyEnum.HARD} />
                    <ComboBox
                        data={['Test1', 'Test2']}
                        height="1.6rem"
                        width="20rem"
                        callbackValue={(value: string) => {
                            addTaskStore.setSelectedLecture(value);
                        }}
                        value={addTaskStore.selectedLecture}
                    />
                </div>
                <div className="flex-row-box">
                    <TextInput
                        placeholder={t.t('page.addTask.description', 'Description of the Task')}
                        rows={5}
                        onChange={(value) => addTaskStore.setDescription(value)}
                    />
                </div>
                <div className="flex-row-box Task-container">
                    {addTaskStore.taskList.map((task, index) => {
                        return (
                            <AddQuestion
                                questions={addTaskStore.taskList}
                                addQuestion={(value) => addTaskStore.addTaskListItem(value)}
                                setQuestions={(value) => addTaskStore.setTaskList(value)}
                                questionIndex={index}
                                key="add-question"
                            />
                        );
                    })}
                </div>
                <div onClick={this.addQuestionHandler} className="add-question" role="button" tabIndex={0}>
                    <Plus style={{ marginRight: '0.5rem' }} />
                    <p style={{ margin: '0' }}>{t.t('page.addTask.addNewTask', 'Add new Task')}</p>
                </div>
            </div>
        );
    }
}

export default AddTask;
