import React, { Component } from 'react';
import './CorrectionReviewBoxes.scss';
import CalendarIcon from '../../components/icons/calendar.icon';
import UserIcon from '../../components/icons/user.icon';
import EditIcon from '../../components/icons/edit.icon';
import IconText from '../../components/IconText/IconText';
import IconButton from '../../components/Buttons/IconButton/IconButton';
import DifficultyLabel from '../../components/DifficultyLabel/DifficultyLabel';

class CorrectionReviewBoxes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="correction-box">
                <div className="correction-box-header">
                    <p>AUFGABE: Plusrechnen für Einsteiger</p>
                    <DifficultyLabel level="easy"></DifficultyLabel>
                </div>
                <div className="correction-box-bottom">
                    <IconText text="Max Musterman" position="left" class="correction-pupil">
                        <UserIcon width="21" height="21"></UserIcon>
                    </IconText>
                    <IconText text="Vor 3 Tagen" position="left" class="correction-data">
                        <CalendarIcon width="21" height="21"></CalendarIcon>
                    </IconText>
                    <IconButton text="Korrigieren" distance="0.4rem" class="correction-correct">
                        <EditIcon></EditIcon>
                    </IconButton>
                </div>
            </span>
        );
    }
}

export default CorrectionReviewBoxes;
