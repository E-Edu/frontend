import React, {Component} from 'react';
import '../../css/main.scss';
import './index.scss';
import Header from '../../components/Header';


class Settings extends Component {
    render() {
        return (
            <div className="settings">
                <Header side='Dashboard'/>
                <h1 className="text-dark" style={{position: "relative", top: 100, left: 150}}>Einstellungen</h1>
                <div className="settingsContent">
                    <table>
                        <tr>
                            <td width="200px" className="topic">Email</td>
                            <td>test@test.de</td>
                        </tr>
                        <tr>
                            <td className="topic">Passwort</td>
                            <td>************</td>
                            <td>
                                <div>
                                    {/* TODO edit icon
                                    import EditIcon from "../../assets/icons/edit.icon;
                                    <EditIcon stroke={"#3A506B"} width={20} height={20}/>
                                    */}
                                    <span>Ändern</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="topic">Sprache</td>
                            <td>Deutsch</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}

export default Settings;