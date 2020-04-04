import React, { Component } from 'react';
import './AddTeacher.scss';
import { UserPlus } from 'react-feather';
import Page from '../../components/Page/Page';
import TextInput from '../../components/Input/TextBox/TextInput';
import { t } from '../../i18n/i18n';
import AddTeacherRequest from '../../components/AddTeacherRequest/AddTeacherRequest';

class AddTeacher extends Component {
    state = {
        validEmail: false,
        email: '',
        pendingRequests: [
            ['Herr Lehrer Mustermann', 'lehrer.mustermann@lehrer-mail.de'],
            ['Herr Lehrer Mustermann2', 'lehrer.mustermann2@lehrer-mail.de'],
        ],
    };

    isValidEmail() {
        const regex =
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
        return this.state.email.match(regex) !== null;
    }

    emailChange = (event) => {
        this.setState({
            email: event.target.value,
            validEmail: this.isValidEmail(),
        });
    };

    add = () => {
        this.setState({ validEmail: this.isValidEmail() });
        if (this.state.validEmail) alert('Teacher added');
    };

    renderRequests() {
        return this.state.pendingRequests.map((request, index) => {
            return <AddTeacherRequest key={index} name={request[0]} email={request[1]} />;
        });
    }

    render() {
        return (
            <Page mainTitle={t.t('page.addTeacher.title', 'Add teacher')}>
                <div className="add-teacher">
                    <TextInput
                        shadow={this.state.validEmail || this.state.email === '' ? '' : 'red'}
                        maxWidth="30rem"
                        placeholder={t.t('page.addTeacher.emailOfTeacher', 'Teachers email')}
                        onChange={this.emailChange}
                        className="test"
                    />
                    <UserPlus className="add-teacher-button" onClick={this.add} />
                </div>
                <h1 className="requests-title">
                    this.state.pendingRequests.length === 0?
                    {t.t('page.addTeacher.noPendingRequests', 'No pending requests')}:
                    {t.t('page.addTeacher.pendingRequests', 'Pending requests')}
                </h1>
                <div className="pending-requests">{this.renderRequests()}</div>
            </Page>
        );
    }
}

export default AddTeacher;
