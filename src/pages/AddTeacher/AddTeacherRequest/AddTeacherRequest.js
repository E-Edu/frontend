import React, { Component } from 'react';
import './AddTeacherRequest.scss';
import { Check, Mail, X } from 'react-feather';
import TeacherIcon from '../../../components/icons/teacher.icon';

class AddTeacherRequest extends Component {
    render() {
        return (
            <div className="teacher-request">
                <div className="teacher-infos">
                    <div className="teacher-info">
                        <TeacherIcon />
                        <span>{this.props.name}</span>
                    </div>
                    <div className="teacher-info">
                        <Mail />
                        <span>{this.props.email}</span>
                    </div>
                </div>
                <div className="request-actions">
                    <div className="request-action">
                        <span>Ablehnen</span>
                        <X size="29" color="#ba1919" />
                    </div>
                    <div className="request-action">
                        <span>Annehmen</span>
                        <Check size="29" color="#19BA3F" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTeacherRequest;
