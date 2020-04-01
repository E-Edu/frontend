import React, { Component } from 'react';
import './AddTeacherRequest.scss';
import { Check, Mail, X } from 'react-feather';
import Teacher from '../../../components/icons/teacher.icon';
import IconText from '../../../components/IconText/IconText';
import IconButton from '../../../components/Buttons/IconButton/IconButton';

class AddTeacherRequest extends Component {
    render() {
        return (
            <div className="teacher-request">
                <div className="teacher-infos">
                    <IconText text={this.props.name} position="left" distance="0.4rem" class="teacher-info">
                        {/* TODO: find a better solution */}
                        <Teacher color="#3a506b" fill="none" size="29"/>
                    </IconText>
                    <IconText text={this.props.email} position="left" distance="0.4rem" class="teacher-info">
                        <Mail stroke="#3a506b" size="29"/>
                    </IconText>
                </div>
                <div className="request-actions">
                    <IconButton text="Ablehnen" class="request-action">
                        <X stroke="#ba1919" size="29"/>
                    </IconButton>
                    <IconButton text="Annehmen" class="request-action">
                        <Check stroke="#19BA3F" size="29"/>
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default AddTeacherRequest;
