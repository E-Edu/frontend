import React, { Component } from 'react';
import './CorrectionReviewBoxes.scss';
import { Calendar, Edit, User } from 'react-feather';
import DifficultyLabel from '../Task/Difficulty/DifficultyLabel/DifficultyLabel';
import IconText from '../IconText/IconText';
import IconButton from '../Buttons/IconButton/IconButton';
import { WithT as i18n } from 'i18next';

class CorrectionReviewBoxes extends Component {
    render() {
        return (
            <span className="correction-box">
                <div className="correction-box-header">
                    <p>AUFGABE: Plusrechnen für Einsteiger</p>
                    <div className="correction-difficulty">
                        <DifficultyLabel difficulty={this.props.difficulty} />
                    </div>
                </div>
                <div className="correction-box-bottom">
                    <IconText text="Max Musterman" position="left" class="correction-pupil">
                        <User />
                    </IconText>
                    <IconText text={i18n.t('correction.date')} position="left" class="correction-data">
                        <Calendar />
                    </IconText>
                    <IconButton
                        text={i18n.t('correction.correctionAction')}
                        distance="0.4rem"
                        class="correction-correct">
                        <Edit />
                    </IconButton>
                </div>
            </span>
        );
    }
}

export default CorrectionReviewBoxes;
