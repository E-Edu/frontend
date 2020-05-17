import React, { Component } from 'react';
import '../../css/main.scss';
import './Settings.scss';
import { observer } from 'mobx-react';
import Modal from 'react-animated-modal';
import { t } from '../../i18n/i18n';
import TextInput from '../../components/Input/TextBox/TextInput';
import Button from '../../components/ui/button/Button';
import ComboBox from '../../components/ui/ComboBox/ComboBox';
import SettingsStore from '../../store/settings.store';
import Confirmation from '../../components/Settings/Confirmation/Confirmation';

const settingsStore = new SettingsStore();

@observer
class Settings extends Component {
    languages = {
        en: t.t('page.settings.languages.en', 'English'),
        de: t.t('page.settings.languages.de', 'German'),
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    // TODO: remove this because it'll be deprecated
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        const keyCode = 27;
        if (event.keyCode === keyCode) {
            settingsStore.hideConfirmation();
        }
    };

    // TODO call backend api
    deleteAccount = () => {
        settingsStore.hideConfirmation();
        // TODO redirect to landing page
    };

    changeLanguage = (language) => {
        settingsStore.setSelectedLanguage(language);
        Object.entries(this.languages).forEach(([key, value]) => {
            if (language === value) {
                language = key;
            }
        });
        t.changeLanguage(language);
        localStorage.setItem('language', language);
    };

    render() {
        return (
            <div>
                <Modal
                    visible={settingsStore.confirmationVisible}
                    closemodal={() => {
                        settingsStore.hideConfirmation();
                    }}
                    type="fadeIn">
                    <Confirmation
                        deleteHandler={this.deleteAccount}
                        closeHandler={() => {
                            settingsStore.hideConfirmation();
                        }}
                    />
                </Modal>
                <div className="settings">
                    <div className="header">
                        <span>{t.t('page.settings.title', 'Settings')}</span>
                    </div>
                    <div className="content flex-row-box">
                        <div className="left flex-column-box">
                            <div className="flex-row-box">
                                <div className="labels flex-column-box">
                                    <div className="text-label flex-row-box">
                                        <span>{t.t('page.settings.email', 'Email')}</span>
                                    </div>
                                    <div className="text-label flex-row-box">
                                        <span>{t.t('page.settings.language', 'Language')}</span>
                                    </div>
                                    <div className="text-label flex-row-box">
                                        <span>{t.t('page.settings.curentPassword', 'Current Password')}</span>
                                    </div>
                                    <div className="text-label flex-row-box">
                                        <span>{t.t('page.settings.newPassword', 'New Password')}</span>
                                    </div>
                                </div>
                                <div className="inputs flex-column-box">
                                    <div className="input flex-row-box">
                                        <TextInput
                                            placeholder="test@test.de"
                                            style={{ width: '20rem', height: '1.69rem' }}
                                            onChange={(value) => settingsStore.setEmail(value)}
                                            className="text-input"
                                        />
                                    </div>
                                    <div className="input flex-row-box">
                                        <ComboBox
                                            placeholder={t.t('page.settings.language', 'Language')}
                                            data={Object.keys(this.languages).map((key) => this.languages[key])}
                                            value={settingsStore.selectedLanguage}
                                            callbackValue={(value) => {
                                                this.changeLanguage(value);
                                            }}
                                            width="20rem"
                                            height="1.69rem"
                                            className="multi-input"
                                            typingEnabled
                                        />
                                    </div>
                                    <div className="input flex-row-box">
                                        <TextInput
                                            placeholder="**********"
                                            style={{ width: '20rem', height: '1.69rem' }}
                                            onChange={(value) => settingsStore.setOldPassword(value)}
                                            className="text-input"
                                            type="password"
                                        />
                                    </div>
                                    <div className="input flex-row-box">
                                        <TextInput
                                            placeholder="**********"
                                            style={{ width: '20rem', height: '1.69rem' }}
                                            onChange={(value) => settingsStore.setNewPassword(value)}
                                            className="text-input"
                                            type="password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button
                                name={t.t('page.settings.requestAccount', 'Request Account Information')}
                                type="button"
                                styleType="secondary"
                                width="33rem"
                                height="2.69rem"
                                fontSize="23px"
                                className="get-account-data"
                            />
                            <Button
                                name={t.t('page.settings.deleteAccount', 'Delete Account')}
                                type="button"
                                styleType="secondary"
                                width="33rem"
                                height="2.69rem"
                                fontSize="23px"
                                className="delete-data"
                                onClick={() => {
                                    settingsStore.showConfirmation();
                                }}
                            />
                        </div>
                    </div>
                    <div className="actions flex-row-box">
                        <Button
                            name={t.t('page.settings.save', 'Save')}
                            type="button"
                            styleType="primary"
                            width="15rem"
                            height="2.69rem"
                            fontSize="23px"
                            className="save"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
