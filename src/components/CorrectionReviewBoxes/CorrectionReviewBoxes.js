import React, { Component } from 'react';
import './CorrectionReviewBoxes.scss';
import Calendar from '../../assets/icons/calendar.svg';
import User from '../../assets/icons/user.svg';
import Edit from '../../assets/icons/edit.svg';

class CorrectionReviewBoxes extends Component {
    render() {
        return (
            <span className="correction-box">
                <div className="correction-box-header">
                    <p>AUFGABE: Plusrechnen für Einsteiger</p>
                    <div className="correction-difficulty">
                        <p>Leicht </p>
                    </div>
                </div>
                <div className="correction-box-bottom">
                    <div className="correction-pupil">
                        <img src={User} />
                        <p> Max Musterman</p>
                    </div>
                    <div className="correction-date">
                        <img src={Calendar} />
                        <p> Vor 3 Tagen</p>
                    </div>
                    <div className="correction-correct">
                        <img src={Edit} />
                        <p>Korrigieren </p>
                    </div>
                </div>
            </span>
        );
    }
}

export default CorrectionReviewBoxes;
