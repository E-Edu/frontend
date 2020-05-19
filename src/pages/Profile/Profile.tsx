import React from 'react';
import './Profile.scss';
import { Calendar, Edit2, Tag, TrendingUp, User } from 'react-feather';
import { observer } from 'mobx-react';
import IconText from '../../components/IconText/IconText';
import { t } from '../../i18n/i18n';
import ProfileSubject from './ProfileSubject/ProfileSubject';
import ProfileCertificate from './ProfileCertificate/ProfileCertificate';
import ProfileStore from '../../store/ProfileStore';

const profileStore = new ProfileStore();

@observer
class Profile extends React.Component {
    usernameClickListener = () => {
        profileStore.setDisabled(!profileStore.disabled);
    };

    usernameChangeListener = (event) => {
        // TODO: Send data to backend
        profileStore.setUsername(event.target.value);
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
                                        value={profileStore.username}
                                        disabled={profileStore.disabled}
                                    />
                                    <span
                                        style={{ outline: 'none' }}
                                        onClick={this.usernameClickListener}
                                        role="button"
                                        tabIndex={0}>
                                        <Edit2 className="pen img" />
                                    </span>
                                </div>
                            </span>
                        </div>

                        <div className="central stat font-arimo points">
                            <span className="central">
                                <IconText
                                    text={`6.526 ${t.t('page.profile.points', 'Points')}`}
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
                                    text={`6.526 ${t.t('page.profile.points', '')}`}
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
                                    text={`${t.t('page.profile.memberSince', 'Member since')} 21.03.2020`}
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
                                <span className="level-rang">
                                    {t.t('page.profile.rank.teachingMaster', 'The Teaching Master')}
                                </span>{' '}
                                {/* TODO change in component */}
                            </div>
                        </div>

                        <div className="favorite-subject">
                            <div>
                                <h2 className="font-arimo profile-h2">
                                    {t.t('page.profile.favoriteSubjects', 'Favorite subjects')}
                                </h2>
                                <div className="profile-favorite-box">
                                    <ProfileSubject subject="GERMAN" />
                                    <ProfileSubject subject="MATH" />
                                    <ProfileSubject subject="COMUTERSIENCE" />
                                </div>
                            </div>
                        </div>
                        <div className="favorite-certificate">
                            <div>
                                <h2 className="font-arimo profile-h2">
                                    {t.t('page.profile.certificates', 'Certificates')}
                                </h2>
                                <div className="profile-certificate-box">
                                    <ProfileCertificate title="1.000 Questions answered" date="23.01.2020" />
                                    <ProfileCertificate title="0 Error in 100 questions" date="23.01.2020" />
                                    <ProfileCertificate title="Best layout" date="23.01.2020" />

                                    <ProfileCertificate title="5,000 questions answered" date="23.01.2020" />
                                    <ProfileCertificate title="1.000 points achieved" date="23.01.2020" />
                                    <ProfileCertificate title="5,000 points achieved" date="23.01.2020" />

                                    <ProfileCertificate title="500 computer science points" date="23.01.2020" />
                                    <ProfileCertificate title="1,000 IT points" date="23.01.2020" />
                                    <ProfileCertificate title="Computer Science degree" date="23.01.2020" />
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
