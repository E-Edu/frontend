import React, { Component } from 'react';
import './Task.scss';
import { Award } from 'react-feather';
import { t } from '../../i18n/i18n';
import IconText from '../../components/IconText/IconText';
import DifficultyLabel from '../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';

class Task extends Component {
    render() {
        const { name } = this.props;
        const { difficulty } = this.props;
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
                            <span>{t.t('page.task.questions', 'Questions')}</span>
                        </div>
                        <IconText text={rightQuestions} fontColor="#3A506B" class="task-element">
                            <Award color="#3A506B" />
                        </IconText>
                        <DifficultyLabel level={difficulty} />
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
