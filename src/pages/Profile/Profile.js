import React from 'react';
import Tags_icon from '../../assets/icons/tag.svg';
import Task_icon from '../../assets/icons/pencile.svg';
import File from '../../assets/icons/file-text.svg';
import Badge from '../../assets/icons/award.svg';
import Download from '../../assets/icons/download.svg';
import './Profile.scss';
import '../../css/main.css';
import Data from '../../lib/Colors.json';
import { Translation } from '../../i18n/i18n';

class ProfileSubject extends React.Component {
    render() {
        const { subject } = this.props;
        const border = `0.73333335rem solid ${Data.subjectColor[subject]}`;

        return (
            <div className="profile-subjekt" style={{ borderLeft: border }}>
                <div className="profile-top">
                    <div className="profile-subjekt-img">
                        <img className="logo" alt="subjekt-img" src={File} />
                    </div>
                    <div className="text">
                        <div className="profile-subjekt-name">
                            <span className="title">{Translation.t(`subject.${subject}.name`)}</span>
                        </div>
                        <div className="profile-subjekt-underline">
                            <span className="fach-info">{Translation.t(`subject.${subject}.description`)}</span>
                        </div>
                    </div>
                </div>
                <div className="profile-bottom" />
            </div>
        );
    }
}

class ProfileCertificate extends React.Component {
    render() {
        return (
            <div className="profile-certifikate">
                <div className="certificates-row">
                    <div className="titel-certificate">
                        <img className="badge-image" src={Badge} alt="badge" />
                        <p className="badge-title">{this.props.Title}</p>
                    </div>
                    <div className="date-certificate">
                        <p className="date">Erreicht am{this.props.Datum}</p>
                    </div>
                </div>
                <img className="download-image" src={Download} alt="download" />;
            </div>
        );
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { username: 'Morpheus', disabled: true };

    usernameClickListener = () => {
        this.state.disabled = !this.state.disabled;
        this.setState(this.state);
    };

    usernameChangeListener = () => {
        this.state.username = document.getElementById('usernameInput').value;
        // TODO: Send data to backend
        this.setState(this.state);
    };

    render() {
        return (
            <div>
                <div className="main">
                    <div>
                        <div className="result-content-header result-content-header-id">
                            <div className="result-left">
                                <span className="result-subject">Profile</span>
                            </div>
                        </div>
                    </div>
                    <div className="profile-head">
                        <div className="central">
                            <img
                                className="pb"
                                alt="Profilbild"
                                src="https://yt3.ggpht.com/a/AATXAJzQuI4-bNmqwbklzCjvm576_nZwSdpG5jX-Hw=s176-c-k-c0x00ffffff-no-rj-mo"
                            />
                            <span className="central name">
                                <div className="profile-flex-row">
                                    <input
                                        onChange={this.usernameChangeListener}
                                        className="username-input"
                                        type="text"
                                        value={this.state.username}
                                        disabled={this.state.disabled}
                                    />
                                    <a onClick={this.usernameClickListener}>
                                        <img className="pen img" src={Task_icon} alt="pen" />
                                    </a>
                                </div>
                            </span>
                        </div>

                        <div className="central stat font-arimo points">
                            <span className="central">
                                <div className="profile-flex-row">
                                    <span className="user img user-icon">
                                        <User_icon alt="user icon" stroke="#3A506B" />
                                    </span>
                                    <span>6.526</span>
                                    <span className="var-info profile-span-padding-l">
                                        {Translation.t('task.points')}
                                    </span>
                                </div>
                            </span>
                        </div>

                        <div className="central stat font-arimo trending">
                            <span className="central">
                                <div className="profile-flex-row">
                                    <span className="trending img trending-icon">
                                        <Trending_icon width="24" height="30" stroke="#3A506B" alt="trending" />
                                    </span>
                                    <span>7.231</span>
                                    <span className="var-info profile-span-padding-l">
                                        {Translation.t('task.questions')}
                                    </span>
                                </div>
                            </span>
                        </div>

                        <div className="central stat font-arimo since">
                            <span className="central">
                                <div className="profile-flex-row">
                                    <span className="calender img calender-icon">
                                        <Calender_icon alt="calendar" stroke="#3A506B" />
                                    </span>
                                    <span className="profile-span-padding-r">
                                        {Translation.t('profile.memberSince')}
                                    </span>
                                    <span className="var-info">21.03.2020</span>
                                </div>
                            </span>
                        </div>

                        <div className="profile-levelbar">
                            <div className="levelbar-back">
                                <div className="levelbar-font">
                                    <span>Level</span>
                                    <span> 145</span>
                                    <br />
                                    <span>1423 / 8000</span>
                                </div>
                                <div className="levelbar-front" />
                            </div>
                            <div className="level-rank">
                                <img stroke="#5BC0BE" alt="tag" className="tag" src={Tags_icon} />
                                <span className="level-rang">{Translation.t('profile.rank.teachingMaster')}</span>
                            </div>
                        </div>

                        <div className="favorite-subject">
                            <div>
                                <h2 className="font-arimo profile-h2">{Translation.t('profile.favoriteSubjects')}</h2>
                                <div className="profile-favorite-box">
                                    <ProfileSubject subject="german" />
                                    <ProfileSubject subject="math" />
                                    <ProfileSubject subject="computerScience" />
                                </div>
                            </div>
                        </div>
                        <div className="favorite-certificate">
                            <div>
                                <h2 className="font-arimo profile-h2">{Translation.t('profile.certificates')}</h2>
                                <div className="profile-certificate-box">
                                    <ProfileCertificate Title="1.000 Fragen beantwortet" Datum="23.01.2020" />
                                    <ProfileCertificate Title="0 Fehler in 100 Fragen" Datum="23.01.2020" />
                                    <ProfileCertificate Title="Bestes Layout" Datum="23.01.2020" />

                                    <ProfileCertificate Title="5.000 Fragen beantwortet" Datum="23.01.2020" />
                                    <ProfileCertificate Title="1.000 Punkte erreicht" Datum="23.01.2020" />
                                    <ProfileCertificate Title="5.000 Punkte erreicht" Datum="23.01.2020" />

                                    <ProfileCertificate Title="500 Informatikpunkte" Datum="23.01.2020" />
                                    <ProfileCertificate Title="1.000 Informatikpunkte" Datum="23.01.2020" />
                                    <ProfileCertificate Title="Informatikabschluss" Datum="23.01.2020" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
