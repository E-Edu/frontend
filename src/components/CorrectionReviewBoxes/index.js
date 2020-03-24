
import React, { Component } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import Thumbs_Up from '../../assets/icons/thumbs-up.svg';
import Thumbs_Down from '../../assets/icons/thumbs-down.svg';
import Calendar from '../../assets/icons/calendar.svg';
import User from '../../assets/icons/user.svg';
import Edit from '../../assets/icons/edit.svg';


class CorrectionReviewBoxes extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className='correctionBox'>
                <div className='correctionBoxHeader'>
                    <p>AUFGABE: Plusrechnen für Einsteiger</p>
                    <div className='correctionDifficulty'>
                        <p>Leicht </p>
                    </div>


                </div>
                <div className='correctionBoxBottom'>
                    <div className='correctionPupil'>
                        <img src={User}/>
                        <p> Max Musterman</p>

                    </div>
                    <div className='correctionDate'>
                        <img src={Calendar}/>
                        <p> Vor 3 Tagen</p>


                    </div>
                    <div className='correctionCorrect'>
                        <img src={Edit}/>
                        <p>Korrigieren </p>

                    </div>

                </div>
            </div>




        );
    }
}
export default CorrectionReviewBoxes;
