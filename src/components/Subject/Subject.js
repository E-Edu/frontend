import React from 'react';
import './Subject.scss';
import { Calendar, File, User, Users } from 'react-feather';
import IconText from '../IconText/IconText';
import { Translation } from '../../i18n/i18n';

class Subject extends React.Component {
    render() {
        const { subject, color } = this.props;
        const border = `0.733rem solid ${color}`;

        return (
            <div className="subject" style={{ borderLeft: border }}>
                <div className="image">
                    <File size="30" color="#000000" />
                </div>
                <div className="box-content">
                    <h3 className="subject-name">{subject}</h3>
                    <span className="under-name">{this.props.underline}</span>
                    <IconText
                        text={`${Translation.t('subjectInfos.weekendtask')} ${this.props.weekendtask}`}
                        position="left"
                        class="weekend-task flex-row">
                        <Calendar className="calender" size="27" color="#000000" />
                    </IconText>
                    <div className="points">
                        <IconText
                            text={`${this.props.points} ${Translation.t('subjectInfos.points')}`}
                            position="left"
                            distance="0.4rem"
                            class="user-points flex-row">
                            <User color="#000000" size="27" />
                        </IconText>
                        <IconText
                            text={`${this.props.community_Points} ${Translation.t('subjectInfos.points')}`}
                            position="left"
                            distance="0.4rem"
                            class="community-points flex-row">
                            <Users color="#000000" size="27" />
                        </IconText>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subject;
