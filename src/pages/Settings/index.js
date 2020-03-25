import React, {Component} from 'react';
import '../../css/main.scss';
import './index.scss';
import Header from '../../components/Header';
import Sidebar from "../../components/Sidebar";

class Settings extends Component {
    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div>
                <Header side='Dashboard'/>
                <Sidebar active="settings"/>
                <div className="settings" id="main">
                    <h1 className="text-dark">Einstellungen</h1>
                    <div className="settingsContent">
                        <table>
                            <tr>
                                <td width="13.333333rem" className="topic">Email</td>
                                <td width="8rem">test@test.de</td>
                                <td>Ändern</td>
                                {/* Datenbankverbindung Schnittstellen Team? */}
                            </tr>
                            <tr>
                                <td className="topic">Passwort</td>
                                <td>************</td>
                                <td>
                                    {/* TODO edit icon
                                        import EditIcon from "../../assets/icons/edit.icon;
                                        <EditIcon stroke={"#3A506B"} width={20} height={20}/>
                                        */}
                                    Ändern
                                </td>
                            </tr>
                            <tr>
                                <td className="topic">Sprache</td>
                                <td>Deutsch</td>
                                <td>Ändern</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
