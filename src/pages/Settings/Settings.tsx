import React, { Component } from 'react';
import '../../css/main.scss';
import './Settings.scss';

//TODO REVISION
class Settings extends Component {
    render() {
        return (
            <div>NOT FINISHED YET</div>
        );
        /*return (
            <div>
                <div className="settings">
                    <h1 className="text-dark">{t.t('page.settings.title', 'Settings')}</h1>
                    <div className="settings-content">
                        <table>
                            <tr>
                                <td width="13.333333rem" className="topic">
                                    {t.t('page.settings.email', 'Email')}
                                </td>
                                <td width="8rem">test@test.de</td>
                                <td>{t.t('page.settings.change', 'Change')}</td>
                            </tr>
                            <tr>
                                <td className="topic">{t.t('page.settings.password', 'Password')}</td>
                                <td>************</td>
                                <td>
                                    <Edit2 />
                                    {t.t('settings.change')}
                                </td>
                            </tr>
                            <tr>
                                <td className="topic">{t.t('page.settings.language', 'Language')}</td>
                                <td>Deutsch</td>
                                <td>{t.t('page.settings.change', 'Change')}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        );*/
    }
}

export default Settings;
