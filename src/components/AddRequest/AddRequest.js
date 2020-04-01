import React, { Component } from 'react';
import './AddRequest.scss';
import MailIcon from '../../components/icons/mail.icon';
import XIcon from '../../components/icons/x.icon';
import TeacherIcon from '../../components/icons/teacher.icon';
import CheckIcon from '../../components/icons/check.icon';
import IconText from '../../components/IconText/IconText';

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
                    <IconText text={this.props.name} position="left" distance="0.4rem">
                        {/* TODO: find a better solution */}
                        <TeacherIcon color="#3a506b" fill="none" />
                    </IconText>
                    <div
                        className="clickable"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 20,
                            width: 100,
                            right: 0,
                            justifyContent: 'flex-end',
                        }}>
                        <span style={{ marginRight: 20 }}>Ablehnen</span>
                        <XIcon stroke="#ba1919" />
                    </div>
                </div>
                <div
                    style={{
                        marginTop: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <IconText text={this.props.email} position="left" distance="0.4rem">
                        <MailIcon stroke="#3a506b" />
                    </IconText>
                    <div
                        className="clickable"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 20,
                            width: 100,
                            right: 0,
                            justifyContent: 'flex-end',
                        }}>
                        <span style={{ marginRight: 20 }}>Annehmen</span>
                        <CheckIcon stroke="#19BA3F" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AddRequest;
