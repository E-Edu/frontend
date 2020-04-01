import React, { Component } from 'react';
import './ReportInfo.scss';
import { ArrowDown, ArrowUp, Mail } from 'react-feather';
import TeacherIcon from '../icons/teacher.icon';

class ReportInfo extends Component {
    constructor() {
        super();
        this.state = {
            subject: 'Mathe',
            theme: 'Grundrechnen',
            themeart: 'Plus',
            dislikes: '178',
            likes: '3',
            teacher: 'Herr Lehrer Mustermann',
            messages: '20',
            TaskName: 'Äpfel und Birnen',
            TaskText:
                'Peter hat 3 Äpfel und 4 Birnen. Er gibt 2 Äpfel und 1 Birne ab.  Wie viele Äpfel hat Peter noch?',
        };
    }

    handleClick = () => {};

    render() {
        return (
            <div className="reportcontainer">
                <div className="top-infos">
                    <div className="subject-path">
                        {this.state.subject} |{this.state.theme} |{this.state.themeart}
                    </div>

                    <div className="infos-right">
                        <div className="likes">
                            <span>{this.state.dislikes}</span>
                            <ArrowDown />
                            <span> {this.state.likes}</span>
                            <ArrowUp />
                        </div>
                        <div className="teacher">
                            {this.state.teacher} <TeacherIcon />
                        </div>
                        <div className="messages">
                            {this.state.messages} <Mail />
                        </div>
                    </div>
                </div>
                <div className="TaskName">{this.state.TaskName}</div>
                <div className="TaskText">{this.state.TaskText}</div>

                <div className="buttons">
                    <div className="row-1">
                        <button onClick={this.handleClick} className="half" type="button">
                            Behalten
                        </button>
                        <button className="half" type="button">Löschen</button>
                    </div>
                </div>
                <div className="done-div">
                    <button className="done" className="button" type="button">
                        Fertig
                    </button>
                </div>
            </div>
        );
    }
}
export default ReportInfo;
