import React, { Component } from 'react';
import './Task.scss';
import colorData from '../../lib/Colors';
import { Award } from 'react-feather';
import { Translation } from '../../i18n/i18n';
import IconText from '../../components/IconText/IconText';

class Task extends Component {
    render() {
        const name = this.props.name;
        const difficulty = this.props.difficulty;
        const description = this.props.description;
        const questions = this.props.questions;
        const rightQuestions = this.props.rightQuestions;
        const color = colorData.difficultyColor[difficulty];
        const backgroundColor = color !== undefined ? color.backgroundColor : '#ffffff';
        const borderColor = color !== undefined ? color.borderColor : '#000000';

        return (
            <div className="task">
                <div className="task-head">
                    <span>{name}</span>
                    <div className="task-head-elements">
                        <div className="task-element">
                            <span>{questions}</span>
                            <span>{Translation.t('taskList.questions')}</span>
                        </div>
                        <IconText text={rightQuestions} fontColor="#3A506B" class="task-element">
                            <Award stroke="#3A506B" />
                        </IconText>
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: 20,
                                color: '#1C2541',
                                right: 0,
                                justifyContent: 'flex-end',
                                backgroundColor: backgroundColor,
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: borderColor,
                                borderRadius: 10,
                                padding: '0.0rem 0.33333334rem',
                            }}>
                            {Translation.t('difficulty.' + difficulty)}
                        </span>
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
