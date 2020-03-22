
import React, { Component } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import Thumbs_Up from '../../Assets/icons/thumbs-up.svg';
import Thumbs_Down from '../../Assets/icons/thumbs-down.svg';

import Calendar from '../../Assets/icons/calendar.svg';
import User from '../../Assets/icons/user.svg';
import Edit from '../../Assets/icons/edit.svg';


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

                    </div>
                    <div className='correctionDate'>
                        <img src={Calendar}/>


                    </div>
                    <div className='correctionCorrect'>
                        <img src={Edit}/>

                    </div>

                </div>
            </div>




        );
    }
}
export default CorrectionReviewBoxes;
