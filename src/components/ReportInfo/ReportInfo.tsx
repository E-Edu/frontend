import React from 'react';
import './ReportInfo.scss';
import { ArrowDown, ArrowUp, Mail } from 'react-feather';
import { observer } from 'mobx-react';
import TeacherIcon from '../icons/TeacherIcon';

interface ReportProps {
    subject?: string;
    theme?: string;
    themeart?: string;
    dislikes?: string;
    likes?: string;
    teacher?: string;
    messages?: string;
    taskName?: string;
    taskText?: string;
}

@observer
class ReportInfo extends React.Component<ReportProps> {
    handleClick = () => {};

    render() {
        const { subject, theme, themeart, dislikes, likes, teacher, messages, taskName, taskText } = this.props;
        return (
            <div className="reportcontainer">
                <div className="top-infos">
                    <div className="subject-path">
                        {subject} |{theme} |{themeart}
                    </div>

                    <div className="infos-right">
                        <div className="likes">
                            <span>{dislikes}</span>
                            <ArrowDown />
                            <span> {likes}</span>
                            <ArrowUp />
                        </div>
                        <div className="teacher">
                            {teacher} <TeacherIcon />
                        </div>
                        <div className="messages">
                            {messages} <Mail />
                        </div>
                    </div>
                </div>
                <div className="TaskName">{taskName}</div>
                <div className="TaskText">{taskText}</div>

                <div className="buttons">
                    <div className="row-1">
                        <button onClick={this.handleClick} className="half" type="button">
                            Behalten
                        </button>
                        <button className="half" type="button">
                            Löschen
                        </button>
                    </div>
                </div>
                <div className="done-div">
                    <button className="done button" type="button">
                        Fertig
                    </button>
                </div>
            </div>
        );
    }
}

export default ReportInfo;
