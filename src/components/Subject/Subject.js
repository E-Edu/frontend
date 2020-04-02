import React from 'react';
import './Subject.scss';
import { Calendar, File, User, Users } from 'react-feather';
import IconText from '../../components/IconText/IconText';
import { Translation } from '../../i18n/i18n';

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
                    <span className="under-name">{this.props.underline}</span>
                    <IconText
                        text={Translation.t('subjectInfos.weekendtask') + ' ' + this.props.weekendtask}
                        position="left"
                        class="weekend-task flex-row">
                        <Calendar className="calender" width="27" height="27" stroke="#000000" />
                    </IconText>
                    <div className="points">
                        <IconText
                            text={this.props.points + ' ' + Translation.t('subjectInfos.points')}
                            position="left"
                            distance="0.4rem"
                            class="user-points flex-row">
                            <User stroke="#000000" width="27" height="27" />
                        </IconText>
                        <IconText
                            text={this.props.community_Points + ' ' + Translation.t('subjectInfos.points')}
                            position="left"
                            distance="0.4rem"
                            class="community-points flex-row">
                            <Users stroke="#000000" width="27" height="27" />
                        </IconText>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subject;
