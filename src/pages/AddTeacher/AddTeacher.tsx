import React from 'react';
import './AddTeacher.scss';
import { UserPlus } from 'react-feather';
import { observer } from 'mobx-react';
import Page from '../../components/Page/Page';
import TextInput from '../../components/Input/TextBox/TextInput';
import { t } from '../../i18n/i18n';
import AddTeacherRequest from '../../components/AddTeacherRequest/AddTeacherRequest';
import AddTeacherStore from '../../store/addTeacher.store';

const addTeacherStore = new AddTeacherStore();

@observer
class AddTeacher extends React.Component {
    emailChange = (event) => {
        this.setState({
            email: event.target.value,
            validEmail: this.isValidEmail(),
        });
        addTeacherStore.setEmail(event.target.value);
        addTeacherStore.setIsValidEmail(this.isValidEmail());
    };

    add = () => {
        addTeacherStore.setIsValidEmail(this.isValidEmail());
    };

    isValidEmail() {
        const regex =
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
        return addTeacherStore.email.match(regex) !== null;
    }

    renderRequests() {
        return addTeacherStore.pendingRequests.map((request, index) => {
            return <AddTeacherRequest key={index} name={request.name} email={request.email} />;
        });
    }

    render() {
        return (
            <Page mainTitle={t.t('page.addTeacher.title', 'Add teacher')}>
                <div className="add-teacher">
                    <TextInput
                        shadow={addTeacherStore.isValidEmail || addTeacherStore.email === '' ? '' : 'red'}
                        maxWidth="30rem"
                        placeholder={t.t('page.addTeacher.emailOfTeacher', 'Teachers email')}
                        onChange={this.emailChange}
                        className="test"
                    />
                    <UserPlus className="add-teacher-button" onClick={this.add} />
                </div>
                <h1 className="requests-title">
                    {addTeacherStore.pendingRequests.length === 0
                        ? t.t('page.addTeacher.noPendingRequests', 'No pending requests')
                        : t.t('page.addTeacher.pendingRequests', 'Pending requests')}
                </h1>
                <div className="pending-requests">{this.renderRequests()}</div>
            </Page>
        );
    }
}

export default AddTeacher;
