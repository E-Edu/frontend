import React from 'react';
import './ProfileSubject.scss';
import { File } from 'react-feather';
import Data from '../../../lib/Colors.json';
import { t } from '../../../i18n/i18n';
import SubjectLabel from '../../../components/Subject/subjectLabel/subjectLabel';

class ProfileSubject extends React.Component {
    render() {
        const { subject } = this.props;
        const border = `0.73333335rem solid ${Data.subjectColor[subject]}`;

        return (
            <div className="profile-subjekt" style={{ borderLeft: border }}>
                <div className="profile-top">
                    <div className="profile-subject-img">
                        <File className="logo" />
                    </div>
                    <div className="text">
                        <div className="profile-subjekt-name">
                            <SubjectLabel className="fach-info" subjectLabel={subject} />
                        </div>
                        <div className="profile-subjekt-underline">
                            <span>{t.t(`subject.${subject}.description`)}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-bottom" />
            </div>
        );
    }
}

export default ProfileSubject;
