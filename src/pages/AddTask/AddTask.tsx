import React from 'react';
import './AddTask.scss';
import PageHeader from '../../components/Page/Header/PageHeader';
import { t } from '../../i18n/i18n';
import Button from '../../components/ui/button/Button';
import TextInput from '../../components/Input/TextBox/TextInput';



interface Task {
    Name: string;
    Subjekt: string;
    Module: string;
    difficulty: string;


class AddTask extends React.Component {
    setTaskDifficulty = (difficulty: string): void => {
        const oldbuttonDiffiClassList = document.getElementsByClassName('difficulty-select-')[0].classList;
        oldbuttonDiffiClassList.remove('Test');
        const newbuttonDiffiClassList = document.getElementsByClassName(`difficulty-select-${difficulty}`)[0].classList;
        newbuttonDiffiClassList.add('Test');
        let Difficulty;
    };

    render() {
        const testTask: Task = {
            Name: 'TestName',
            Subjekt: 'TestSubjekt',
            Module: 'TestModule',
            difficulty: 'easy',
        };

        return (
            <div className="add-task">
                <div className="flex-row-box">
                    <PageHeader mainTitle={t.t('page.addTask.title', 'Create new task')} />
                    <Button styleType="primary" name={t.t('page.addTask.publish', 'publish')} />
                </div>
                <div className="flex-row-box">
                    <TextInput placeholder="Aufgaben Pack Title" />
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
                </div>
                <div className="flex-row-box">
                    <textarea placeholder="Beschreibung der aufgabe" rows={5} style={{ width: '70%' }} />
                </div>
                <div className="flex-row-box Task-container" />
            </div>
        );
    }
}

export default AddTask;
