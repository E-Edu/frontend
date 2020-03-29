import React, { Component } from 'react';
import './ReportInfo.scss';
import down from '../../assets/icons/thumbs-down.svg';
import up from '../../assets/icons/thumbs-up.svg';
import mail from '../../assets/icons/mail.svg';
import teacher from '../../assets/icons/teacher.svg';
/*
    -subject
    -theme
    -themeart
    -Dislikes
    -Likes
    -teacher
    -messages
    -TaskName
    -TaskText
 */
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
    handleClick = () => {
        console.log('Hi');
    };

    render() {
        return (
            <div className="reportcontainer">
                <div className="top-infos">
                    <div className="subject-path">
                        {this.state.subject} | {this.state.theme} | {this.state.themeart}
                    </div>

                    <div className="-infos-right">
                        <div className="likes">
                            <span>{this.state.dislikes}</span>
                            <img src={down} />
                            <span> {this.state.likes}</span>
                            <img src={up} />
                        </div>
                        <div className="teacher">
                            {this.state.teacher} <img src={teacher} />
                        </div>
                        <div className="messages">
                            {this.state.messages} <img src={mail} />
                        </div>
                    </div>
                </div>
                <div className="TaskName">{this.state.TaskName}</div>
                <div className="TaskText">{this.state.TaskText}</div>

                <div className="buttons">
                    <div className="row-1">
                        <button onClick={this.handleClick} className="half">
                            Behalten
                        </button>
                        <button className="half">Löschen</button>
                    </div>
                </div>
                <div className="done-div">
                    <button className="done" className="button">
                        Fertig
                    </button>
                </div>
            </div>
        );
    }
}
export default ReportInfo;
