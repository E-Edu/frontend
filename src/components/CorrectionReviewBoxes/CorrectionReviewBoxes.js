import React, { Component } from 'react';
import './CorrectionReviewBoxes.scss';
import { Calendar, Edit, User } from 'react-feather';
import DifficultyLabel from '../Task/Difficulty/DifficultyLabel/DifficultyLabel';

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
                    <div className="correction-pupil">
                        <User />
                        <p> Max Musterman</p>
                    </div>
                    <div className="correction-date">
                        <Calendar />
                        <p> Vor 3 Tagen</p>
                    </div>
                    <div className="correction-correct">
                        <Edit />
                        <p>Korrigieren </p>
                    </div>
                </div>
            </span>
        );
    }
}

export default CorrectionReviewBoxes;
