import React from 'react';
import './Subject.scss';
import { Calendar, File, User, Users } from 'react-feather';
import { ColorProperty } from 'csstype';
import IconText from '../IconText/IconText';
import { t } from '../../i18n/i18n';
import SubjectLabel from './subjectLabel/subjectLabel';
import SubjectDescription from './subjectDescription/subjectDescription';
import Data from '../../lib/Colors.json';

interface SubjectProps {
    subject?: any;
    color?: ColorProperty;
    desciption?: string;
    weekendtask?: string;
    points?: string;
    communityPoints?: string;
}

class Subject extends React.Component<SubjectProps> {
    render() {
        const { subject, color, desciption, weekendtask, points, communityPoints } = this.props;
        const borderColor = Data.subjectColor[color];
        const border = `0.733rem solid ${borderColor}`;

        return (
            <div className="subject" style={{ borderLeft: border }}>
                <div className="image">
                    <File size="30" color="#000000" />
                </div>
                <div className="box-content">
                    <SubjectLabel className="subject-name" subjectLabel={subject} />
                    <SubjectDescription className="under-name" subjectDescription={desciption} />
                    <IconText
                        text={`${t.t('subjectInfos.weekendtask')} ${weekendtask}`}
                        position="left"
                        class="weekend-task flex-row">
                        <Calendar className="calender" size="27" color="#000000" />
                    </IconText>
                    <div className="points">
                        <IconText
                            text={`${points} ${t.t('subjectInfos.points')}`}
                            position="left"
                            distance="0.4rem"
                            class="user-points flex-row">
                            <User color="#000000" size="27" />
                        </IconText>
                        <IconText
                            text={`${communityPoints} ${t.t('subjectInfos.points')}`}
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
