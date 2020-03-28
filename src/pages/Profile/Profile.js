import React from 'react';
import Calender_icon from '../../components/icons/calender.icon.js';
import Tags_icon from '../../assets/icons/tag.svg';
import User_icon from '../../components/icons/user.icon.js';
import Task_icon from '../../assets/icons/pencile.svg';
import Trending_icon from '../../components/icons/trending-up.icon.js';
import File from '../../assets/icons/file-text.svg';
import Badge from '../../assets/icons/award.svg';
import Download from '../../assets/icons/download.svg';
import './Profile.scss';
import '../../css/main.css';
import Data from '../../lib/Colors.json';
import {Translation} from "../../i18n/i18n";

class Profile_Subject extends React.Component {

    render() {
        const subject = this.props.Subject;
        const border = "0.73333335rem solid " + Data["subjectColor"][subject];
        return (
            <div className='profile_subjekt' style={{borderLeft: border}}>
                <div className='profileTop'>
                    <div className='profile_subjekt_img'>
                        <img id="logo" alt="subjekt_img" src={File}/>
                    </div>
                    <div id="text">
                        <div className='profile_subjekt_name'>
                            <span id="title">{this.props.Subject}</span>
                        </div>

                        <div className="profile_subjekt_underline">
                            <span id="fach_info">{this.props.Underline}</span>
                        </div>
                    </div>

                </div>

                <div className='profileBottom'>

                </div>
            </div>
        )
    }
}

class ProfileCerficate extends React.Component {
    render() {
        return (
            <div className='profile_certifikate'>
                <div className='CertificatesRow'>
                    <div className='titelCertificate'>
                        <img id="badgeimage" src={Badge} alt="badge"/>
                        <p id="badgetitle">{this.props.Title}</p>
                    </div>
                    <div className='dateCertificate'>
                        <p id="date">Erreicht am {this.props.Datum}</p>
                    </div>
                </div>
                <img id="downloadimage" src={Download} alt="download"/>
            </div>
        );
    }
}

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        username: "Morpheus",
        disabled: true
    };

    componentDidUpdate() {
        console.log(this.state);
    }

/*    componentDidMount() {
        const top = document.getElementsByClassName('headerNavbar')[0].clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }*/

    usernameClickListener = () => {
        this.state.disabled = !this.state.disabled;
        this.setState(this.state);
    };

    usernameChangeListener = () => {
        this.state.username = document.getElementById('usernameInput').value;
        //TODO: Send data to backend
        this.setState(this.state);
    };

    render() {
        return (
            <div>
                <div id="main">
                    <div>
                        <div className='resultContentHeader' id="resultContentHeaderID">
                            <div className='resultLeft'><span className='resultSubject'>Profile</span></div>
                        </div>
                    </div>
                    <div id="profile_head">
                        <div className="central">
                            <img id="pb" alt='Profilbild'
                                 src="https://yt3.ggpht.com/a/AATXAJzQuI4-bNmqwbklzCjvm576_nZwSdpG5jX-Hw=s176-c-k-c0x00ffffff-no-rj-mo"/>
                            <span className="central" id="name">
                            <div className='profile_flex-row'>
                                <input onChange={this.usernameChangeListener} id='usernameInput' type='text'
                                       value={this.state.username} disabled={this.state.disabled}/>
                                <a onClick={this.usernameClickListener}>
                                    <img className='pen img' src={Task_icon} alt="pen"/>
                                </a>
                            </div>
                        </span>
                        </div>

                        <div className="central stat font-arimo" id="points">
                        <span className="central">
                            <div className="profile_flex-row">
                                <span className='user img' id="user_icon"><User_icon alt="user icon" stroke="#3A506B"/></span>
                                <span>6.526</span>
                                <span className='var_info profile_span_padding_l'>{Translation.t("task.points")}</span>
                            </div>
                        </span>
                        </div>

                        <div className="central stat font-arimo" id="trending">
                        <span className="central">
                            <div className="profile_flex-row">
                                <span className='trending img' id="trending_icon"><Trending_icon width="24" height="30" stroke="#3A506B" alt="trending"/></span>
                                <span>7.231</span>
                                <span className='var_info profile_span_padding_l'>{Translation.t("task.questions")}</span>
                            </div>
                        </span>
                        </div>

                        <div className="central stat font-arimo" id="since">
                        <span className="central">
                            <div className="profile_flex-row">
                                <span className='calender img' id="calender_icon"><Calender_icon   alt="calendar" stroke="#3A506B"/></span>
                                <span className='profile_span_padding_r'>{Translation.t("profile.memberSince")}</span><span
                                className='var_info'>21.03.2020</span>
                            </div>
                        </span>
                        </div>

                        <div id="profile_levelbar">
                            <div id="levelbar_back">
                                <div id="levelbar_font">
                                    <span>Level</span>
                                    <span> 145</span><br/>
                                    <span>1423 / 8000</span>
                                </div>
                                <div id='levelbar_front'/>
                            </div>
                            <div id="level_rank">
                                <img stroke="#5BC0BE" alt="tag" className="tag" src={Tags_icon}/>
                                <span id="level_Rang">{Translation.t("profile.rank.teachingMaster")}</span>
                            </div>
                        </div>

                        <div id="favorite_subject">
                            <div>
                                <h2 className='font-Arimo profile_h2'>{Translation.t("profile.favoriteSubjects")}</h2>
                                <div id="profile_favorite_box">
                                    <Profile_Subject Subject="Deutsch" Underline="Sprachenlernen - Babel"/>
                                    <Profile_Subject Subject="Mathe"
                                                    Underline="2 x 3 macht 4 Widdewiddewitt und 3 macht 9"/>
                                    <Profile_Subject Subject="Informatik" Underline="0110001101000101110111"/>
                                </div>
                            </div>
                        </div>
                        <div id="favorite_certificate">
                            <div>
                                <h2 className='font-Arimo profile_h2'>{Translation.t("profile.certificates")}</h2>
                                <div id="profile_certificate_box">

                                    <ProfileCerficate Title="1.000 Fragen beantwortet" Datum="23.01.2020"/>
                                    <ProfileCerficate Title="0 Fehler in 100 Fragen" Datum="23.01.2020"/>
                                    <ProfileCerficate Title="Bestes Layout" Datum="23.01.2020"/>

                                    <ProfileCerficate Title="5.000 Fragen beantwortet" Datum="23.01.2020"/>
                                    <ProfileCerficate Title="1.000 Punkte erreicht" Datum="23.01.2020"/>
                                    <ProfileCerficate Title="5.000 Punkte erreicht" Datum="23.01.2020"/>

                                    <ProfileCerficate Title="500 Informatikpunkte" Datum="23.01.2020"/>
                                    <ProfileCerficate Title="1.000 Informatikpunkte" Datum="23.01.2020"/>
                                    <ProfileCerficate Title="Informatikabschluss" Datum="23.01.2020"/>
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