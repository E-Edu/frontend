import React from 'react';
import './ResultQuestion.scss';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import { ColorProperty } from 'csstype';

interface ResultQuestionProps {
    color?: ColorProperty;
    index?: number;
}

class ResultQuestion extends React.Component<ResultQuestionProps> {
    render() {
        const { color, index } = this.props;
        return (
            <div className="result-question-box">
                <div className="result-status-bar" style={{ backgroundColor: color }} />
                <div className="result-content">
                    <div className="result-top">
                        <div className="result-left-top">
                            <p className="result-question-label">
                                Frage
                                {index}
                            </p>
                            <p className="result-question-titel">Äpfel und Birnen</p>
                        </div>
                        <div className="result-right-top">
                            <p className="result-rating">Frage bewerten: </p>
                            <ThumbsUp />
                            <ThumbsDown />
                        </div>
                    </div>
                    <div className="result-bottom">
                        <div className="result-left-bottom">
                            <p className="result-my-answer">Deine Antwort: </p>
                            <p> 1</p>
                        </div>
                        <div className="result-right-bottom">
                            <p className="result-right-answer"> Richtige Antwort: </p>
                            <p> 1</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultQuestion;
