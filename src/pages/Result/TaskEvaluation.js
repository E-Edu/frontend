import React from 'react';
import './TaskEvaluation.scss';
import ResultQuestion from '../../components/ResultQuestion/ResultQuestion';
import TaskHeader from "../../components/TaskHeader/TaskHeader";

class TaskEvaluation extends React.Component {

    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    render() {
        return (
            <div>
                <div className='result' id="main">
                    <div className='resultContainer'> //TODO: Result -> Evaluation
                        <TaskHeader module="Mathe"/>
                        <div className='resultEvaluation'>
                            <span>Auswertung</span>
                            <p>Korrekte Fragen:<span> 7 von 10 </span></p>
                        </div>
                        <div className='resultPointcount'>
                            <div className='resultNewPoints'>+7 Punkte</div>
                            <div className='resultWeeklyPoints'>
                                <p>Diese Woche: <span> 22 Punkte</span></p>
                            </div>
                        </div>
                        <div className='resultQuestions'>
                            {this.results.map(((value, index) => {
                                return <div className="resultQuestion" key={index}><ResultQuestion color={value}
                                                                                                   index={index + 1}/>
                                </div>
                            }))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskEvaluation;
