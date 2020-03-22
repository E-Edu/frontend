
import React, { Component } from 'react';
import './index.scss';
import { useParams } from 'react-router-dom';
import Thumbs_Up from '../../assets/icons/thumbs-up.svg';
import Thumbs_Down from '../../assets/icons/thumbs-down.svg';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import CorrectionReviewBoxes from '../../components/CorrectionReviewBoxes';



class CorrectionReview extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            
                <div className='correctionContent'>
                    <Header side='Dashboard' />
                    <Sidebar side='Dashboard' />
                   
                    <div className='correctionHeader'>
                        <h1>Korrektur</h1>
                        <button className='correctionMode'>Korrekturmodus</button>


                    </div>
                    <div className='correctionQuestionBox'>
                    
                        <CorrectionReviewBoxes/>
                    

                    </div>
                </div>
                
            
        );
       

    }
}
export default CorrectionReview;
