import React from 'react';
import Calender_icon from '../../assets/icons/calendar.svg';
import Tags_icon from '../../assets/icons/tag.svg';
import User_icon from '../../assets/icons/user.svg';
import Task_icon from '../../assets/icons/pencile.svg';
import Trending_icon from '../../assets/icons/trending-up.svg';
import File from '../../assets/icons/file-text.svg';
import Badge from '../../assets/icons/award.svg';
import Download from '../../assets/icons/download.svg';
import './index.scss';
import '../../css/main.css';
import Data from '../../lib/Subjekt_Config.json';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';

class Profile_Subject extends React.Component {

    render() {
        const subject = this.props.Subject;
        const border = "11px solid " + Data["Subject_color"][subject];
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
        this.state = {
            Benutzername: "Test",
            disabled: true
        }
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    componentDidMount() {
        const top = document.getElementsByClassName('headerNavbar')[0].clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    ClickHandler_Bearbeiten = () => {
        if (this.state.disabled) {
            this.setState({
                disabled: false
            });
        } else {
            this.setState({
                disabled: true
            });
            //send data to Backend
        }
    };

    ChangeHandler_Benutzername = () => {
        this.setState({
            Benutzername: document.getElementById('Benutzername_input').value
        });
    };

    render() {
        return (
            <div>
                <Header side='Dashboard'/>
                <Sidebar active="profile"/>
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
                                <input onChange={this.ChangeHandler_Benutzername} id='Benutzername_input' type='text'
                                       value={this.state.Benutzername} disabled={this.state.disabled}/>
                                <a onClick={this.ClickHandler_Bearbeiten}>
                                    <img className='pen img' src={Task_icon} alt="pen"/>
                                </a>
                            </div>
                        </span>
                        </div>

                        <div className="central stat font-arimo" id="points">
                        <span className="central">
                            <div className="profile_flex-row">
                                <img className='user img' src={User_icon} alt="user icon"/>
                                <span>6.526</span>
                                <span className='var_info profile_span_padding_l'>Punkte</span>
                            </div>
                        </span>
                        </div>

                        <div className="central stat font-arimo" id="trending">
                        <span className="central">
                            <div className="profile_flex-row">
                                <img className='trending img' src={Trending_icon} alt="trending"/>
                                <span>7.231</span>
                                <span className='var_info profile_span_padding_l'>Fragen</span>
                            </div>
                        </span>
                        </div>

                        <div className="central stat font-arimo" id="since">
                        <span className="central">
                            <div className="profile_flex-row">
                                <img className='calender img' src={Calender_icon} alt="calendar"/>
                                <span className='profile_span_padding_r'>Dabei seit</span><span
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
                                <span id="level_Rang">Der lehrende Meister</span>
                            </div>
                        </div>

                        <div id="favorite_subject">
                            <div>
                                <h2 className='font-Arimo profile_h2'>Favorisierte Fächer</h2>
                                <div id="profile_favorite_box">
                                    <ProfileSubject Subject="Deutsch" Underline="Sprachenlernen - Babel"/>
                                    <ProfileSubject Subject="Mathe"
                                                    Underline="2 x 3 macht 4 Widdewiddewitt und 3 macht 9"/>
                                    <ProfileSubject Subject="Informatik" Underline="0110001101000101110111"/>
                                </div>
                            </div>
                        </div>
                        <div id="favorite_certificate">
                            <div>
                                <h2 className='font-Arimo profile_h2'>Zertifikat</h2>
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
