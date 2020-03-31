import React, { Component } from 'react';
import './AddTeacherRequest.scss';
import icon_mail from '../../../assets/icons/mail.svg';
import icon_teacher from '../../../assets/icons/teacher.svg';
import CheckIcon from '../../../components/icons/check.icon';
import { Translation } from '../../../i18n/i18n';
import XIcon from '../../../components/icons/x.icon';

class AddTeacherRequest extends Component {
    render() {
        return (
            <div className="teacher-request">
                <div className="teacher-infos">
                    <div className="teacher-info">
                        <img src={icon_teacher} alt="teacher-icon" />
                        <span>{this.props.name}</span>
                    </div>
                    <div className="teacher-info">
                        <img src={icon_mail} alt="mail-icon" />
                        <span>{this.props.email}</span>
                    </div>
                </div>
                <div className="request-actions">
                    <div className="request-action">
                        <span>Ablehnen</span>
                        <XIcon height="29px" width="29px" stroke="#ba1919" />
                    </div>
                    <div className="request-action">
                        <span>Annehmen</span>
                        <CheckIcon height="29px" width="29px" stroke="#19BA3F" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTeacherRequest;
