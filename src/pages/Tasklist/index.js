import React from 'react';
import './index.scss';
import UsersIcon from "../../components/icons/user.icon.js";
import UserIcon from '../../components/icons/users.icon.js';
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Award from "../../components/icons/award.icon";
import Search from "../../components/icons/search.icon"
import colorData from "../../lib/Color_Config";

class Task extends React.Component {
    render() {
        const color = colorData.Difficulty_color[this.props.schwere];
        let bgColor = [color.bg, color.border];
        return <div className="Task">
            <div className="Task_Head">
                <span>{this.props.name}</span>
                <div className='Task_Head_Elements'>
                    <div className='Task_element'>
                        <span>{this.props.Anzahl_Fragen}</span>
                        <span>Fragen</span>
                    </div>
                    <div className='Task_element'>
                        <Award className="ico" stroke="#3A506B"/>
                        <span>{this.props.richtige_Fragen}</span>
                    </div>
                    <span style={{
                        display: "flex", alignItems: "center", marginRight: 20, color: "#1C2541",
                        right: 0, justifyContent: "flex-end", backgroundColor: bgColor,
                        borderWidth: 1, borderStyle: "solid", borderColor: bgColor[1], borderRadius: 10,
                        padding: "0px 5px"
                    }}>{this.props.schwere}</span>
                </div>
            </div>
            <div className="Task_Bottom">
                <span>{this.props.Beschreibung}</span>
            </div>
        </div>
    }
}


class Tasklist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: ""
        }
    }

    componentDidMount() {
        const top = document.getElementsByClassName('headerNavbar')[0].clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    OnChangeSearch = () => {
        this.setState({
            Search: document.getElementById("site-search").value
        });
        //Übergabe an Backend
    };

    render() {

        return <div>
            <Header side='Dashboard'/>
            <Sidebar active="task/list"/>
            <div className="Tasklist" id="main">
                <div className='resultContentHeader'>
                    <div className='resultLeft'>
                        <span className='resultSubject'>
                            Task
                        </span>
                    </div>

                    <div className="Middle">
                        <div className='resultCenter'>

                            <div className='resultSubject'>
                                <UsersIcon className="ico" stroke="#3A506B"/>
                                <span className="points">213</span><span className="points">Punkte</span>
                            </div>

                        </div>
                        <div className='resultCenter' id="second">

                            <div className='resultSubject'>
                                <UserIcon className="ico" stroke="#3A506B"/>

                                <span className="points">21.323</span><span className="points">Punkte</span>
                            </div>

                        </div>
                    </div>
                    <div className='resultRight'>
                        <span className='resultSubject'>
                            <div id='input-search'>
                                <Search height="30" width="30"/>
                                <input onChange={this.OnChangeSearch} type="text" id="site-search" name="Search"
                                       aria-label="Search"
                                       placeholder="Suche"/>
                            </div>
                        </span>
                    </div>

                </div>
                <div id="Task-Content-List">
                    <Task name="Aufgabe 1" Anzahl_Fragen="12" richtige_Fragen="10" schwere="Leicht"
                          Beschreibung="Kurzer Beschreibungstext eine Aufgabe, die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den text eh nicht lesen werden. Naja mir egal… Ältere Schüler*innen schon."/>
                    <Task name="Aufgabe 2" Anzahl_Fragen="20" richtige_Fragen="13" schwere="Mittel"
                          Beschreibung="Kurzer Beschreibungstext eine Aufgabe, die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den text eh nicht lesen werden. Naja mir egal… Ältere Schüler*innen schon."/>
                    <Task name="Aufgabe 3" Anzahl_Fragen="10" richtige_Fragen="5" schwere="Schwer"
                          Beschreibung="Kurzer Beschreibungstext eine Aufgabe, die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den text eh nicht lesen werden. Naja mir egal… Ältere Schüler*innen schon."/>
                </div>
            </div>
        </div>;

    }
}

export default Tasklist;
