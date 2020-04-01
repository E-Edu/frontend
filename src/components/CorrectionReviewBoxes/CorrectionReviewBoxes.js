import React, { Component } from 'react';
import './CorrectionReviewBoxes.scss';
import { Calendar, Edit, User } from 'react-feather';
import DifficultyLabel from '../Task/Difficulty/DifficultyLabel/DifficultyLabel';
import IconText from '../../components/IconText/IconText';
import IconButton from '../../components/Buttons/IconButton/IconButton';

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
                        <User width="21" height="21"></User>
                    </IconText>
                    <IconText text="Vor 3 Tagen" position="left" class="correction-data">
                        <Calendar width="21" height="21"></Calendar>
                    </IconText>
                   <IconButton text="Korrigieren" class="correction-correct" distance="0.4rem">
                       <Edit />
                   </IconButton>
                </div>
            </span>
        );
    }
}

export default CorrectionReviewBoxes;
