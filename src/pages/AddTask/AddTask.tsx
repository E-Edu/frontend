import React from 'react';
import './AddTask.scss';
import { observer } from 'mobx-react';
import PageHeader from '../../components/Page/Header/PageHeader';
import { t } from '../../i18n/i18n';
import Button from '../../components/ui/button/Button';
import TextInput from '../../components/Input/TextBox/TextInput';
import AddQuestion from '../../components/Task/Add/Question/AddQuestion';
import ComboBox from '../../components/ui/ComboBox/ComboBox';
import AddTaskStore from '../../store/addTask.store';

interface Task {
    Name: string;
    Subjekt: string;
    Module: string;
    difficulty: string;
}

const addTaskStore = new AddTaskStore();

@observer
class AddTask extends React.Component {
    setTaskDifficulty = (difficulty: string): void => {
        const oldbuttonDiffiClassList = document.getElementsByClassName('difficulty-select-')[0].classList;
        oldbuttonDiffiClassList.remove('Test');
        const newbuttonDiffiClassList = document.getElementsByClassName(`difficulty-select-${difficulty}`)[0].classList;
        newbuttonDiffiClassList.add('Test');
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
                    <TextInput placeholder="Aufgaben Pack Title" onChange={(value) => addTaskStore.setTitle(value)} />
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
                    <div className="difficulty-select">
                        <button
                            onClick={() => this.setTaskDifficulty('easy')}
                            className="difficulty-select-easy"
                            type="button">
                            Easy
                        </button>
                        <button
                            onClick={() => this.setTaskDifficulty('medium')}
                            className="difficulty-select-medium"
                            type="button">
                            Medium
                        </button>
                        <button
                            onClick={() => this.setTaskDifficulty('hard')}
                            className="difficulty-select-hard"
                            type="button">
                            Hard
                        </button>
                    </div>
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
                        placeholder="Beschreibung der aufgabe"
                        rows={5}
                        onChange={(value) => addTaskStore.setDescription(value)}
                    />
                </div>
                <div className="flex-row-box Task-container">
                    <AddQuestion
                        questions={addTaskStore.taskList}
                        addQuestion={(value) => addTaskStore.addTaskListItem(value)}
                        setQuestions={(value) => addTaskStore.setTaskList(value)}
                        questionIndex={0}
                    />
                </div>
            </div>
        );
    }
}

export default AddTask;
