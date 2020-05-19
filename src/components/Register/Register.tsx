import React from 'react';
import './Register.scss';
import { observer } from 'mobx-react';
import parse from 'html-react-parser';
import TextInput from '../Input/TextBox/TextInput';
import Button from '../ui/button/Button';
import RegisterStore from '../../store/RegisterStore';
import { t } from '../../i18n/i18n';

const registerStore = new RegisterStore();

@observer
class Register extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="register">
                <div className="header">
                    <span>{t.t('component.register.label', 'Register')}</span>
                </div>
                <div className="register-content">
                    <div className="first-page flex-column-box">
                        <div className="inputs flex-column-box">
                            <TextInput
                                placeholder={t.t('component.register.inputs.emailLabel', 'E-Mail')}
                                onChange={(value) => registerStore.setEmail(value.target.value)}
                                className="text-input"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <TextInput
                                placeholder={t.t('component.register.inputs.passwordLabel', 'Password')}
                                onChange={(value) => registerStore.setPassword(value.target.value)}
                                className="text-input"
                                type="password"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <TextInput
                                placeholder={t.t('component.register.inputs.retypedPasswordLabel', 'Retype password')}
                                onChange={(value) => registerStore.setRetypedPassword(value.target.value)}
                                className="text-input"
                                type="password"
                                style={{ height: '2.69rem', width: '28rem' }}
                            />
                            <div className="account-type flex-row-box">
                                <Button
                                    name={t.t('component.register.teacher', 'teacher')}
                                    onClick={() => registerStore.setAccountType('teacher')}
                                    width="13.5rem"
                                    height="2.69rem"
                                    fontSize="22px"
                                    styleType={registerStore.accountType === 'teacher' ? 'selected' : 'unset'}
                                />
                                <Button
                                    name={t.t('component.register.student', 'student')}
                                    onClick={() => registerStore.setAccountType('student')}
                                    width="13.5rem"
                                    height="2.69rem"
                                    fontSize="22px"
                                    styleType={registerStore.accountType === 'student' ? 'selected' : 'unset'}
                                />
                            </div>
                        </div>
                        <div className="actions flex-row-box">
                            <input
                                type="checkbox"
                                onClick={() => registerStore.setIsGtcAccepted(!registerStore.isGtcAccepted)}
                            />
                            <span>
                                {parse(
                                    t.t(
                                        'component.register.termsText',
                                        '<a href="/imprint">GTC</a> text. I have read the  <a href="/privacy">privacy policy</a> and accepted.'
                                    )
                                )}
                            </span>
                        </div>
                        <div className="submit-region flex-row-box">
                            {registerStore.accountType === 'teacher' ? (
                                <TextInput
                                    placeholder="Teacher Token"
                                    onChange={(value) => registerStore.setTeacherToken(value.target.value)}
                                    className="text-input teacher-token"
                                    style={{ height: '2.69rem', width: '15rem' }}
                                />
                            ) : null}
                            <Button
                                name="Account erstellen"
                                width="12rem"
                                height="2.69rem"
                                fontSize="22px"
                                styleType="primary"
                                className="submit"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
