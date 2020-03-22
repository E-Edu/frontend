
import React, { Component } from 'react';
import './index.scss';



class ResultQuestion extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            
                <div className='resultQuestionbox'>
                    <div class='resultStatusBar'>
                    
                    </div>
                    <div class='resultContent'>

                         <div className='resultTop'>
                
                         <div className='resultLeftTop'>
                            <p className='resultQuestionLabel'>Frage 1 </p>
                            <p className='resultQuestionTitel'>Äpfel und Birnen</p>
                    
                            </div>
                            <div className='resultRightTop'>
                                <p className='resultRating'>Frage bewerten: </p>
                                <p className='resultRatingIcons'> icon icon</p>
                            </div>
                        </div>
                        <div className='resultBottom'>
                            <div className='resultLeftBottom'>
                                <p className='resultMyAnswer'>Deine Antwort: </p>
                                <p>  1</p>

                            </div>
                            <div className='resultRightBottom'>
                                <p className='resultRightAnswer'> Richtige Antwort: </p>
                                <p>  1</p>
                            </div>
                        </div>
                    </div>
                </div>
            
        );

    }
}
export default ResultQuestion;
