import React, { Component } from 'react';
import './CorrectionReviewBoxes.scss';
import Calendar from '../../components/icons/calendar.icon';
import User from '../../components/icons/user.icon';
import Edit from '../../assets/icons/edit.svg';
import IconText from '../../components/IconText/IconText';

class CorrectionReviewBoxes extends Component {
    constructor(props) {
        super(props);
    }

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
                    <IconText text="Max Musterman" position="left" class="correction-pupil">
                        <User width="21" height="21"></User>
                    </IconText>
                    <IconText text="Vor 3 Tagen" position="left" class="correction-data">
                        <Calendar width="21" height="21"></Calendar>
                    </IconText>
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
