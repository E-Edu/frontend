import React from 'react';
import './ProfileSubject.scss';
import { File } from 'react-feather';
import Data from '../../../lib/Colors.json';
import { WithT as i18n } from 'i18next';

class ProfileSubject extends React.Component {
    render() {
        const { subject } = this.props;
        const border = `0.73333335rem solid ${Data.subjectColor[subject]}`;

        return (
            <div className="profile-subjekt" style={{ borderLeft: border }}>
                <div className="profile-top">
                    <div className="profile-subjekt-img">
                        <File className="logo" />
                    </div>
                    <div className="text">
                        <div className="profile-subjekt-name">
                            <span className="title">{i18n.t(`subject.${subject}.name`)}</span>
                        </div>
                        <div className="profile-subjekt-underline">
                            <span className="fach-info">{i18n.t(`subject.${subject}.description`)}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-bottom" />
            </div>
        );
    }
}

export default ProfileSubject;
