import React, { Component } from 'react';
import './AddRequest.scss';
import MailIcon from '../../components/icons/mail.icon';
import XIcon from '../../components/icons/x.icon';
import TeacherIcon from '../../components/icons/teacher.icon';
import CheckIcon from '../../components/icons/check.icon';
import IconText from '../../components/IconText/IconText';
import IconButton from '../../components/Buttons/IconButton/IconButton';

class AddRequest extends Component {
    render() {
        return (
            <div className="add-teacher-report-component text-dark">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 10,
                    }}>
                </div>
                <div
                    style={{
                        marginTop: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                </div>
            </div>
        );
    }
}

export default AddRequest;
