import React from 'react';
import './Task.scss';
import { Award } from 'react-feather';
import { t } from '../../../i18n/i18n';
import DifficultyLabel from '../Difficulty/DifficultyLabel/DifficultyLabel';
import { DifficultyEnum } from '../../../models/difficulty.enum';

interface TaskProps {
    name?: string;
    description?: string;
    questions?: string;
    rightQuestions?: string;
    difficulty?: DifficultyEnum;
}

class Task extends React.Component<TaskProps> {
    render() {
        const { name, description, questions, rightQuestions, difficulty } = this.props;

        return (
            <div className="task flex-column-box">
                <div className="task-head flex-row-box">
                    <div style={{ width: '33%' }}>
                        <span>{name}</span>
                    </div>
                    <div style={{ width: '33%', justifyContent: 'center' }} className="flex-row-box">
                        <DifficultyLabel difficulty={difficulty} color="#1c2541" />
                    </div>
                    <div style={{ width: '33%' }}>
                        <div className="task-head-elements flex-row-box" style={{ justifyContent: 'flex-end' }}>
                            <div className="task-element flex-row-box">
                                <span>{questions}</span>
                                <span>{t.t('taskList.questions')}</span>
                            </div>
                            <div className="task-element flex-row-box">
                                <Award className="icon" color="#3A506B" />
                                <span>{rightQuestions}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="task-bottom flex-row-box">
                    <span>{description}</span>
                </div>
            </div>
        );
    }
}

export default Task;
