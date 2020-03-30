import React from 'react';
import './TaskEvaluation.scss';
import ResultQuestion from '../../components/ResultQuestion/ResultQuestion';
import TaskHeader from '../../components/TaskHeader/TaskHeader';

class TaskEvaluation extends React.Component {
    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    render() {
        return (
            <div>
                <div className="result">
                    <div className="result-container">
                        {' '}
                        //TODO: Result -> Evaluation
                        <TaskHeader module="Mathe" />
                        <div className="result-evaluation">
                            <span>Auswertung</span>
                            <p>
                                Korrekte Fragen:<span> 7 von 10 </span>
                            </p>
                        </div>
                        <div className="result-pointcount">
                            <div className="result-new-points">+7 Punkte</div>
                            <div className="result-weekly-points">
                                <p>
                                    Diese Woche: <span> 22 Punkte</span>
                                </p>
                            </div>
                        </div>
                        <div className="result-questions">
                            {this.results.map((value, index) => {
                                return (
                                    <div className="result-question" key={index}>
                                        <ResultQuestion color={value} index={index + 1} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskEvaluation;
