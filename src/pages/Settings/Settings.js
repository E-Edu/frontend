import React, {Component} from 'react';
import '../../css/main.scss';
import './Settings.scss';
import {Translation} from "../../i18n/i18n";

class Settings extends Component {
    render() {
        return (
            <div>
                <div className="settings" id="main">
                    <h1 className="text-dark">{Translation.t("settings.settings")}</h1>
                    <div className="settingsContent">
                        <table>
                            <tr>
                                <td width="13.333333rem" className="topic">{Translation.t("settings.email")}</td>
                                <td width="8rem">test@test.de</td>
                                <td>{Translation.t("settings.change")}</td>
                                {/* Datenbankverbindung Schnittstellen Team? */}
                            </tr>
                            <tr>
                                <td className="topic">{Translation.t("settings.password")}</td>
                                <td>************</td>
                                <td>
                                    {/* TODO edit icon
                                        import EditIcon from "../../assets/icons/edit.icon;
                                        <EditIcon stroke={"#3A506B"} width={20} height={20}/>
                                        */}
                                    {Translation.t("settings.change")}
                                </td>
                            </tr>
                            <tr>
                                <td className="topic">{Translation.t("settings.language")}</td>
                                <td>Deutsch</td>
                                <td>{Translation.t("settings.change")}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
