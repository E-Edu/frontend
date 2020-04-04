import React, { Component } from 'react';
import './Task.scss';
import { Award } from 'react-feather';
import colorData from '../../lib/Colors';
import { WithT as i18n } from 'i18next';
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
                            <span>{i18n.t('taskList.questions')}</span>
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
