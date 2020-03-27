import React, {Component} from 'react';
import './index.scss';
import CorrectionReviewBoxes from '../../components/CorrectionReviewBoxes';


class CorrectionReview extends Component {
    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div>
                <div className='correctionContent' id="main">
                    <div className='correctionHeader'>
                        <h1>Korrektur</h1>
                        <button className='correctionMode'>Korrekturmodus</button>
                    </div>
                    <div className='box'>
                        <CorrectionReviewBoxes/>
                        <CorrectionReviewBoxes/>
                        <CorrectionReviewBoxes/>
                        <CorrectionReviewBoxes/>
                        <CorrectionReviewBoxes/>
                        <CorrectionReviewBoxes/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CorrectionReview;
