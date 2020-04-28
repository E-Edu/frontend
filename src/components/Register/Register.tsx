import React from 'react';
import './Register.scss';
import { observer } from 'mobx-react';
import TextInput from '../Input/TextBox/TextInput';
import Button from '../ui/button/Button';
import RegisterStore from '../../store/register.store';

const registerStore = new RegisterStore();

@observer
class Register extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="register">
                <div className="header">
                    <span>Register</span>
                </div>
                <div className="register-content">
                    <div className="first-page flex-column-box">
                        <div className="inputs flex-column-box">
                            <TextInput
                                placeholder="E-Mail"
                                onChange={(value) => registerStore.setEmail(value.target.value)}
                                className="text-input"
                                height="2.69rem"
                                width="28rem"
                            />
                            <TextInput
                                placeholder="Passwort"
                                onChange={(value) => registerStore.setPassword(value.target.value)}
                                className="text-input"
                                height="2.69rem"
                                width="28rem"
                            />
                            <TextInput
                                placeholder="Passwort bestätigen"
                                onChange={(value) => registerStore.setRetypedPassword(value.target.value)}
                                className="text-input"
                                height="2.69rem"
                                width="28rem"
                            />
                            <div className="account-type flex-row-box">
                                <Button
                                    name="Lehrer"
                                    onClick={() => registerStore.setAccountType('teacher')}
                                    width="13.5rem"
                                    height="2.69rem"
                                    fontSize="22px"
                                    styleType="unset"
                                />
                                <Button
                                    name="Schüler"
                                    onClick={() => registerStore.setAccountType('pupil')}
                                    width="13.5rem"
                                    height="2.69rem"
                                    fontSize="22px"
                                    styleType="unset"
                                />
                            </div>
                        </div>
                        <div className="actions flex-row-box">
                            <input
                                type="checkbox"
                                onClick={() => registerStore.setIsAgbAccepted(registerStore.isAgbAccepted)}
                            />
                            <span>AGB Text. Ich habe die Datenschutzbestimmungen gelesen und akzeptiert.</span>
                        </div>
                        <div className="submit-region flex-row-box">
                            {registerStore.accountType === 'teacher' ? (
                                <TextInput
                                    placeholder="Teacher Token"
                                    onChange={(value) => registerStore.setTeacherToken(value.target.value)}
                                    className="text-input teacher-token"
                                    height="2.69rem"
                                    width="15rem"
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
