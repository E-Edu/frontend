import React from 'react';
import './Profile.scss';
import '../../css/main.css';
import { Calendar, Edit2, Tag, TrendingUp, User } from 'react-feather';
import IconText from '../../components/IconText/IconText';
import { Translation } from '../../i18n/i18n';
import ProfileSubject from './ProfileSubject/ProfileSubject';
import ProfileCertificate from './ProfileCertificate/ProfileCertificate';

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
                                        <Edit2 className="pen img" />
                                    </a>
                                </div>
                            </span>
                        </div>

                        <div className="central stat font-arimo points">
                            <span className="central">
                                <IconText
                                    text={'6.526 ' + Translation.t('task.points')}
                                    position="left"
                                    distance="0.4rem"
                                    class="profile-flex-row">
                                    <User color="#3A506B" />
                                </IconText>
                            </span>
                        </div>

                        <div className="central stat font-arimo trending">
                            <span className="central">
                                <IconText
                                    text={'6.526 ' + Translation.t('task.points')}
                                    position="left"
                                    distance="0.4rem"
                                    class="profile-flex-row">
                                    <TrendingUp size="24" color="#3A506B" />
                                </IconText>
                            </span>
                        </div>

                        <div className="central stat font-arimo since">
                            <span className="central">
                                <IconText
                                    text={Translation.t('profile.memberSince') + ' 21.03.2020'}
                                    position="left"
                                    distance="0.4rem"
                                    class="profile-flex-row">
                                    <Calendar color="#3A506B" />
                                </IconText>
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
                                <Tag color="#5BC0BE" />
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
