import React, { Component } from 'react';
import './index.scss';


class ResultQuestion extends Component {
    

    render() {
        return (
            <div className="resultQuestionbox">
                <div className="resultStatusBar" />
                <div className="resultContent">
                    <div className="resultTop">
                        <div className="resultLeftTop">
                            <p className="resultQuestionLabel">Frage 1 </p>
                            <p className="resultQuestionTitel">Äpfel und Birnen</p>
                        </div>
                        <div className="resultRightTop">
                            <p className="resultRating">Frage bewerten: </p>
                            <img className="resultRatingIcons" src={Thumbs_Up} alt="like icon" />
                            <img className="resultRatingIcons" src={Thumbs_Down} alt="dislike icon" />
                        </div>
                    </div>
                    <div className="resultBottom">
                        <div className="resultLeftBottom">
                            <p className="resultMyAnswer">Deine Antwort: </p>
                            <p> 1</p>
                        </div>
                        <div className="resultRightBottom">
                            <p className="resultRightAnswer"> Richtige Antwort: </p>
                            <p> 1</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ResultQuestion;
