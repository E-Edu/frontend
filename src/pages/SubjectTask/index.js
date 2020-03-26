import React from 'react';
import './index.scss';
import Header from '../../components/Header';

import User from '../../assets/icons/user.svg';
import Users from '../../assets/icons/users.svg';

import Sidebar from '../../components/Sidebar';

class SubjectTask extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        currentQuestion: 4,
        maxQuestion: 10
    };

/*    add() {
        const newValue = this.state.currentQuestion + 1;
        this.setState({currentQuestion: newValue})
    }*/

    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    render() {
        return (
            <div >
                <Header side="Dashboard" />
                <Sidebar active="settings" />

            
                <div id='main'>


                     <div className='subjectTask' id='subjectTask' >
                
                        <div className='subjectTaskContainer'>
                            <div className='subjectTaskContentHeader'>
                                <div className='subjectTaskLeft'>
                                    <span className='subjectTaskSubject'>Mathe</span>
                                    <span className='subjectTaskModule'>Plus</span>
                                </div>
                                <div className='subjectTaskRight'>
                                    <div className='subjectTaskPoints'>
                                        <img src={User} alt=""/>
                                        <p><span> 213</span> Punkte</p>
                                    </div>
                                    <div className='subjectTaskPoints'>
                                        <img src={Users} alt=""/>
                                        <p><span> 21.323</span> Punkte</p>
                                    </div>
                                </div>
                            </div>


                            <div className='progressDisplay'>
                                <span>Frage 4 von 10 </span>
                                <div className='progressBar'>
                                    <div className='progressPer' per='90'
                                        style={{width: `${(this.state.currentQuestion / this.state.maxQuestion) * 100}%`}}>
                                    
                                    </div>

                                </div>
                                <div className='subjectTaskTitel'>
                                    <span>Äpfel und Birnen</span>

                                </div>
                                <div className='subjectTaskDescription'>
                                    <span>
                                        Peter hat 3 Äpfel und 4 Birnen. Er gibt Lena 2 Äpfel und 1 Birne ab. <br/>
                                        Wieviele Äpfel hat Peter noch?
                                    </span>
                                </div>
                            </div>
                            <div className='subjectTaskAnswer'>
                                <div className='subjectTaskAnswerHeader'>
                                    <span> Antwort </span>
                                </div>
                                <div className='subjectTaskAnswerfield'>
                                    <input type="text" placeholder='test'/>
                                </div>
                        
                                <div className='subjectTaskButtons'>
                                    <button className='subjectTaskSkip'>
                                        Überspringen
                                    </button>
                                    <button className='subjectTaskNext' >
                                        Nächste Frage
                                    </button>
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
