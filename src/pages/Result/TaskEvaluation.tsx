import React from 'react';
import './TaskEvaluation.scss';
import ResultQuestion from '../../components/ResultQuestion/ResultQuestion';
import TaskHeader from '../../components/TaskHeader/TaskHeader';

class TaskEvaluation extends React.Component {
    results = ['#BA1919', '#19BA3f', '#687D9A'];

    render() {
        const nullSubtrahend = 1;
        return (
            <div>
                <div className="evaluation">
                    <div className="evaluation-container">
                        <TaskHeader module="Mathe" />
                        <div className="result-evaluation">
                            <span>Auswertung</span>
                            <p>
                                Korrekte Fragen:
                                <span> 7 von 10 </span>
                            </p>
                        </div>
                        <div className="evaluation-pointcount">
                            <div className="evaluation-new-points">+7 Punkte</div>
                            <div className="evaluation-weekly-points">
                                <p>
                                    Diese Woche: <span> 22 Punkte</span>
                                </p>
                            </div>
                        </div>
                        <div className="evaluation-questions">
                            {this.results.map((value, index) => {
                                return (
                                    <div className="evaluation-question" key={value}>
                                        <ResultQuestion color={value} index={index + nullSubtrahend} />
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
