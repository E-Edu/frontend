import React, { Component } from 'react';
import '../../css/main.scss';
import './Settings.scss';
import { Edit2 } from 'react-feather';
import { WithT as i18n } from 'i18next';

class Settings extends Component {
    render() {
        return (
            <div>
                <div className="settings">
                    <h1 className="text-dark">{i18n.t('settings.settings')}</h1>
                    <div className="settings-content">
                        <table>
                            <tr>
                                <td width="13.333333rem" className="topic">
                                    {i18n.t('settings.email')}
                                </td>
                                <td width="8rem">test@test.de</td>
                                <td>{i18n.t('settings.change')}</td>
                                {/* Datenbankverbindung Schnittstellen Team? */}
                            </tr>
                            <tr>
                                <td className="topic">{i18n.t('settings.password')}</td>
                                <td>************</td>
                                <td>
                                    <Edit2 />
                                    {i18n.t('settings.change')}
                                </td>
                            </tr>
                            <tr>
                                <td className="topic">{i18n.t('settings.language')}</td>
                                <td>Deutsch</td>
                                <td>{i18n.t('settings.change')}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
