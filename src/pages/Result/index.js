import React from 'react';
import './index.scss';
import Header from '../../components/Header';
import ResultQuestion from '../../components/ResultQuestion';
import User from '../../assets/icons/user.svg';
import Users from '../../assets/icons/users.svg';
import Sidebar from "../../components/Sidebar";
import TaskHeader from "../../components/TaskHeader";

class Result extends React.Component {

    results = ['#BA1919', '#19BA3f', '#687D9A', '#687D9A', '#19BA3f'];

    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div>
                <Header side='Dashboard'/>
                <Sidebar active="task/result"/>
                <div className='result' id="main">
                    <div className='resultContainer'>
                        {/*<div className='resultContentHeader'>
                            <div className='resultLeft'>
                                <span className='resultSubject'>
                                    Mathe
                                </span>
                                <span className='resultModule'>
                                    Plus
                                </span>
                            </div>
                            <div className='resultRight'>
                                <div className='resultPoints'>
                                    <img src={User} alt=""/>
                                    <p><span> 213</span> Punkte</p>
                                </div>
                                <div className='resultPoints'>
                                    <img src={Users} alt=""/>
                                    <p><span> 21.323</span> Punkte</p>
                                </div>
                            </div>
                        </div>*/}
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

export default Result;
