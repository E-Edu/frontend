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
        return (
            <div className="add-task">
                <div className="flex-row-box header">
                    <PageHeader mainTitle={t.t('page.addTask.title', 'Create new task')} />
                    <Button styleType="primary" name={t.t('page.addTask.publish', 'publish')} />
                </div>
                <div className="flex-row-box first-row">
                    <TextInput
                        placeholder={t.t('page.addTask.packageTitle', 'Task package title')}
                        onChange={(value) => addTaskStore.setTitle(value)}
                        width="16.5rem"
                        height="1.8rem"
                    />
                    <ComboBox
                        data={['Test1', 'Test2']}
                        height="1.6rem"
                        width="20rem"
                        placeholder="Subject"
                        callbackValue={(value: string) => {
                            addTaskStore.setSelectedSubject(value);
                        }}
                        value={addTaskStore.selectedSubject}
                    />
                </div>
                <div className="flex-row-box second-row">
                    {/* TODO: write am map function} */}
                    <div className="flex-row-box difficulty-labels">
                        <DifficultyLabel
                            difficulty={DifficultyEnum.EASY}
                            selected={addTaskStore.selectedDifficulty === DifficultyEnum.EASY}
                            isSelectable
                            onClick={() => addTaskStore.setSelectedDifficulty(DifficultyEnum.EASY)}
                            className="difficulty"
                        />
                        <DifficultyLabel
                            difficulty={DifficultyEnum.MEDIUM}
                            selected={addTaskStore.selectedDifficulty === DifficultyEnum.MEDIUM}
                            isSelectable
                            onClick={() => addTaskStore.setSelectedDifficulty(DifficultyEnum.MEDIUM)}
                            className="difficulty"
                        />
                        <DifficultyLabel
                            difficulty={DifficultyEnum.HARD}
                            selected={addTaskStore.selectedDifficulty === DifficultyEnum.HARD}
                            isSelectable
                            onClick={() => addTaskStore.setSelectedDifficulty(DifficultyEnum.HARD)}
                            className="difficulty"
                        />
                    </div>
                    <ComboBox
                        data={['Test1', 'Test2']}
                        height="1.6rem"
                        width="20rem"
                        placeholder="Model / Thema"
                        callbackValue={(value: string) => {
                            addTaskStore.setSelectedLecture(value);
                        }}
                        value={addTaskStore.selectedLecture}
                    />
                </div>
                <div className="flex-row-box third-row">
                    <TextInput
                        placeholder={t.t('page.addTask.description', 'Description of the Task')}
                        rows={5}
                        onChange={(value) => addTaskStore.setDescription(value)}
                        width="100%"
                    />
                </div>
                <div className="flex-column-box Task-container">
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
                    <p style={{ margin: '0' }}>{t.t('page.addTask.addNewQuestion', 'Add new Question')}</p>
                </div>
            </div>
        );
    }
}

export default AddTask;
