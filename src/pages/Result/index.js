import React from 'react';
import './index.scss';
import Header from '../../components/Header';

import ResultQuestion from '../../components/ResultQuestion';

class Result extends React.Component {
    

    render() {
        return (
            <div className="result">
                <Header side="Dashboard" />

                <div className="resultContainer">
                    <div className="resultContentHeader">
                        <div className="resultLeft">
                            <span className="resultSubject">Mathe</span>
                            <span className="resultModule">Plus</span>
                        </div>
                        <div className="resultRight">
                            <div className="resultPoints">
                                <img className="resultIcons" src={User} alt="User icon" />

                                <p>
                                    <span> 213</span> Punkte
                                </p>
                            </div>
                            <div className="resultPoints">
                                <img className="resultIcons" src={Users} alt="multiple users icon" />
                                <p>
                                    <span> 21.323</span> Punkte
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="resultEvaluation">
                        <span>Auswertung</span>
                        <p>
                            Korrekte Fragen:<span> 7 von 10 </span>
                        </p>
                    </div>
                    <div className="resultPointcount">
                        <div className="resultNewPoints">+7 Punkte</div>

                        <div className="resultWeeklyPoints">
                            <p>
                                Diese Woche: <span> 22 Punkte</span>
                            </p>
                        </div>
                    </div>
                    <div className="resultQuestions">
                        <ResultQuestion />
                    </div>
                </div>
            </div>
        );
    }
}

export default Result;
