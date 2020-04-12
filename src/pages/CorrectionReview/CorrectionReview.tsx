import React, { Component } from 'react';
import './CorrectionReview.scss';
import CorrectionReviewBoxes from '../../components/CorrectionReviewBoxes/CorrectionReviewBoxes';
import { t } from '../../i18n/i18n';
import { DifficultyEnum } from '../../models/difficulty.enum';

class CorrectionReview extends Component {
    render() {
        return (
            <div>
                <div className="correction-content" id="main">
                    <div className="correction-header">
                        <h1>{t.t('page.correctionReview.heading', 'Correction')}</h1>
                        <button type="button" className="correction-mode">
                            {t.t('page.correctionReview.button.correctionMode', 'Correction mode')}
                        </button>
                    </div>
                    <div className="box">
                        <CorrectionReviewBoxes difficulty={DifficultyEnum.EASY} />
                        <CorrectionReviewBoxes difficulty={DifficultyEnum.MEDIUM} />
                        <CorrectionReviewBoxes difficulty={DifficultyEnum.HARD} />
                        <CorrectionReviewBoxes difficulty={DifficultyEnum.EASY} />
                        <CorrectionReviewBoxes difficulty={DifficultyEnum.MEDIUM} />
                        <CorrectionReviewBoxes difficulty={DifficultyEnum.HARD} />
                    </div>
                </div>
            </div>
        );
    }
}

export default CorrectionReview;
