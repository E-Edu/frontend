import React from 'react';
import './Subject.scss';
import CalenderIcon from '../../components/icons/calender.icon.js';
import UserIcon from '../../components/icons/user.icon';
import UsersIcon from '../../components/icons/users.icon';
import File from '../../components/icons/file-text.icon.js';
import IconText from '../../components/IconText/IconText';

class Subject extends React.Component {
    render() {
        const subject = this.props.subject;
        const color = this.props.color;
        const border = '0.73333335rem solid ' + color;

        return (
            <div className="subject" style={{ borderLeft: border }}>
                <div className="image">
                    <File strokewidth="1.5" className="icon" width="30" height="30" stroke="#000000" />
                </div>
                <div className="box-content">
                    <h3 className="subject-name">{subject}</h3>
                    <span className="under-name">{this.props.Underline}</span>
                    <IconText
                        text={'Wöchentliche Aufgaben ' + this.props.Weekendtask}
                        position="left"
                        class="weekend-task flex-row">
                        <CalenderIcon className="calender" width="27" height="27" stroke="#000000" />
                    </IconText>
                    <div className="points">
                        <IconText
                            text={this.props.Points + ' Punkte'}
                            position="left"
                            distance="0.4rem"
                            class="user-points flex-row">
                            <UserIcon stroke="#000000" width="27" height="27" />
                        </IconText>
                        <IconText
                            text={this.props.Community_Points + 'Punkte'}
                            position="left"
                            distance="0.4rem"
                            class="community-points flex-row">
                            <UsersIcon stroke="#000000" width="27" height="27" />
                        </IconText>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subject;
