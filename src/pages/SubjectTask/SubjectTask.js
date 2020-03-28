import React from 'react';
import './SubjectTask.scss';

import User from '../../assets/icons/user.svg';
import Users from '../../assets/icons/users.svg';
import {Link} from "react-router-dom";
import {Translation} from "../../i18n/i18n";

class SubjectTask extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        currentQuestion: 4,
        maxQuestion: 10
    };

    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    renderDescription(description) {
        return description.split("\n").map((value, index) => {
            return (
                <span key={index}>{value}<br/></span>
            );
        });
    }

    render() {
        //TODO: Pass these arguments
        const taskTitle = "Äpfel und Birnen";
        const description = "Peter hat 3 Äpfel und 4 Birnen. Er gibt Lena 2 Äpfel und 1 Birne ab.\n" +
                            "Wieviele Äpfel hat Peter noch?";
        const subject = "math";
        const lection = "addition";

        return (
            <div>
                <div id='main'>
                    <div className='subjectTask' id='subjectTask'>
                        <div className='subjectTaskContainer'>
                            <div className='subjectTaskContentHeader'>
                                <div className='subjectTaskLeft'>
                                    <span className='subjectTaskSubject'>{Translation.t("subject." + subject + ".name")}</span>
                                    <span className='subjectTaskModule'>{Translation.t("lection." + subject + "." + lection + ".name")}</span>
                                </div>
                                <div className='subjectTaskRight'>
                                    <div className='subjectTaskPoints'>
                                        <img src={User} alt=""/>
                                        <p><span> 213</span> {Translation.t("taskList.points")}</p>
                                    </div>
                                    <div className='subjectTaskPoints'>
                                        <img src={Users} alt=""/>
                                        <p><span> 21.323</span> {Translation.t("taskList.points")}</p>
                                    </div>
                                </div>
                            </div>


                            <div className='progressDisplay'>
                                <span>{Translation.t("task.question")} 4 {Translation.t("task.of")} 10 </span>
                                <div className='progressBar'>
                                    <div className='progressPer' per='90'
                                         style={{width: `${(this.state.currentQuestion / this.state.maxQuestion) * 100}%`}}>

                                    </div>

                                </div>
                                <div className='subjectTaskTitel'>
                                    <span>{taskTitle}</span>
                                </div>
                                <div className='subjectTaskDescription'>
                                    {this.renderDescription(description)}
                                </div>
                            </div>
                            <div className='subjectTaskAnswer'>
                                <div className='subjectTaskAnswerHeader'>
                                    <span>{Translation.t("task.answer")}</span>
                                </div>
                                <div className='subjectTaskAnswerfield'>
                                    <input type="text" placeholder='test'/>
                                </div>

                                <div className='subjectTaskButtons'>
                                    <Link to='/task/result' style={{textDecoration: 'none', color: "inherit"}}>
                                        <button className='subjectTaskSkip'>
                                            {Translation.t("task.skip")}
                                        </button>
                                    </Link>
                                    <Link to='/task/result' style={{textDecoration: 'none', color: "inherit"}}>
                                        <button className='subjectTaskNext'>
                                            {Translation.t("task.nextTask")}
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SubjectTask;
