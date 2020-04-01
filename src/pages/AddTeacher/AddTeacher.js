import React, { Component } from 'react';
import './AddTeacher.scss';
import AddRequest from '../../components/AddRequest/AddRequest';
import icon_user_plus from '../../assets/icons/user-plus.svg';

class AddTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = { valid: '' };
    }

    isValidEmail() {
        const regex =
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
        let email = document.getElementById('teacherEmail').value;
        return email.match(regex) !== null;
    }

    emailChange = () => {
        if (this.isValidEmail()) {
            this.setState({ valid: '' });
        } else {
            this.setState({ valid: 'AddTeacherInvalid' });
        }
    };

    add = () => {
        if (this.isValidEmail()) {
            alert('Teacher added');
            document.getElementById('teacherEmail').value = '';
        } else {
            this.setState({ valid: 'AddTeacherInvalid' });
        }
    };

    render() {
        let pendingRequests = [
            ['Herr Lehrer Mustermann', 'lehrer.mustermann@lehrer-mail.de'],
            ['Herr Lehrer Mustermann2', 'lehrer.mustermann2@lehrer-mail.de'],
        ];
        let requestsHeadline = 'ausstehende Anfragen';
        if (pendingRequests.length === 0) {
            requestsHeadline = 'Keine ' + requestsHeadline;
        }
        let requestsText = pendingRequests.map((request) => {
            return (
                <div style={{ position: 'relative', marginBottom: 10, display: 'flex' }} key={request[0]}>
                    <AddRequest name={request[0]} email={request[1]} />
                </div>
            );
        });
        return (
            <div>
                <div className="main">
                    <div style={{ marginLeft: 50 }}>
                        <h1 className="text-dark add-teacher-text-content">Lehrer hinzufügen</h1>
                        <div style={{ display: 'flex' }}>
                            <input
                                type="text"
                                className="teacher-email"
                                placeholder="Email des Lehrers"
                                style={{ padding: 5 }}
                                /*className={this.state.valid } TODO bessere lösung finden*/
                                onChange={this.emailChange}
                            />
                            <img
                                src={icon_user_plus}
                                alt="user-plus-icon"
                                style={{
                                    border: 'solid',
                                    borderWidth: 2,
                                    borderRadius: 8,
                                    marginLeft: 20,
                                    padding: 5,
                                    borderColor: '#1c2541',
                                }}
                                onClick={this.add}
                            />
                        </div>
                        <h1>{requestsHeadline}</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>{requestsText}</div>
                </div>
            </div>
        );
    }
}

export default AddTeacher;
