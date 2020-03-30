import React, { Component } from 'react';
import './CorrectionReview.scss';
import CorrectionReviewBoxes from '../../components/CorrectionReviewBoxes/CorrectionReviewBoxes';

class CorrectionReview extends Component {
    render() {
        return (
            <div>
                <div className="correction-content" id="main">
                    <div className="correction-header">
                        <h1>Korrektur</h1>
                        <button className="correction-mode">Korrekturmodus</button>
                    </div>
                    <div className="box">
                        <CorrectionReviewBoxes difficulty="easy" />
                        <CorrectionReviewBoxes difficulty="medium" />
                        <CorrectionReviewBoxes difficulty="hard" />
                        <CorrectionReviewBoxes difficulty="easy" />
                        <CorrectionReviewBoxes difficulty="medium" />
                        <CorrectionReviewBoxes difficulty="hard" />
                    </div>
                </div>
            </div>
        );
    }
}

export default CorrectionReview;
