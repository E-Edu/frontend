import React from 'react';
import { Award } from 'react-feather';
import { t } from '../../../i18n/i18n';
import DifficultyLabel from '../Difficulty/DifficultyLabel/DifficultyLabel';

class Task extends React.Component {
    render() {
        const { name } = this.props;
        const { description } = this.props;
        const { questions } = this.props;
        const { rightQuestions } = this.props;

        return (
            <div className="task">
                <div className="task-head">
                    <span>{name}</span>
                    <div className="task-head-elements">
                        <div className="task-element">
                            <span>{questions}</span>
                            <span>{t.t('taskList.questions')}</span>
                        </div>
                        <div className="task-element">
                            <Award className="icon" color="#3A506B" />
                            <span>{rightQuestions}</span>
                        </div>
                        <DifficultyLabel difficulty={this.props.difficulty} />
                    </div>
                </div>
                <div className="task-bottom">
                    <span>{description}</span>
                </div>
            </div>
        );
    }
}

export default Task;
