import React, {Component} from 'react';
import './ResultQuestion.scss';
import ThumbsUp from '../../assets/icons/thumbs-up.svg';
import ThumbsDown from '../../assets/icons/thumbs-down.svg';

class ResultQuestion extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='resultQuestionbox'>
                <div className='resultStatusBar' style={{backgroundColor: this.props.color}}/>
                <div className='resultContent'>
                    <div className='resultTop'>
                        <div className='resultLeftTop'>
                            <p className='resultQuestionLabel'>Frage {this.props.index} </p>
                            <p className='resultQuestionTitel'>Äpfel und Birnen</p>
                        </div>
                        <div className='resultRightTop'>
                            <p className='resultRating'>Frage bewerten: </p>
                            <img src={ThumbsUp} alt=""/>
                            <img src={ThumbsDown} alt=""/>
                        </div>
                    </div>
                    <div className='resultBottom'>
                        <div className='resultLeftBottom'>
                            <p className='resultMyAnswer'>Deine Antwort: </p>
                            <p> 1</p>
                        </div>
                        <div className='resultRightBottom'>
                            <p className='resultRightAnswer'> Richtige Antwort: </p>
                            <p> 1</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResultQuestion;
