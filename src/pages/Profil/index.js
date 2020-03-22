import {Component} from 'react';
import './index.scss';

class Template extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='Profil'>
                <div>
                    <div className='resultContentHeader'>
                        <div className='resultLeft'>
                            <span className='resultSubject'>Profile</span>
                        </div>
                    </div>
                </div>
                <div id="profile_head">
                    <div className="central">
                        <img alt='Profilbild' src='Test'/>
                    </div>
                    <span className="central" id="name">
            <span>Benutzername</span>
            <img className='pen' src={Task_icon}/>
        </span>
                </div>
                <div className="central stat font-arimo" id="points">
                    <img className='user' src={User_icon}/>
                    <span>6.526</span>
                    <span className='var_info'>Punkte</span>
                </div>
                <div className="central stat font-arimo" id="trending">
                    <img className='trending' src={Trending_icon}/>
                    <span>7.231</span>
                    <span className='var_info'>Fragen</span>
                </div>
                <div className="central stat font-arimo" id="since">
                    <img className='calender' src={Calender_icon}/>
                    <span>Dabei seit</span>
                    <span className='var_info'>21.03.2020</span>
                </div>
                <div id="profile_levelbar">
                    <div id="levelbar_back">
                        <div id="levelbar_font">
                            <span>Level</span>
                            <span>145</span><br/>
                            <span>1423 / 8000</span>
                        </div>
                        <div id='levelbar_front'>
                        </div>
                    </div>
                    <div id="level_rang">
                        <img alt="tag" className="tag" src={Tags_icon}/>
                        <span id="level_Rang"> Der Lehrender Meister </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Template;
