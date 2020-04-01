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
                    <IconText text={this.props.name} position="left" distance="0.4rem">
                        {/* TODO: find a better solution */}
                        <Teacher color="#3a506b" fill="none" />
                    </IconText>
                    {/* TODO: Link to a methode */}
                    <IconButton text="Ablehnen" distance="0.8rem" clickEvent={() => null}>
                        <X stroke="#ba1919" />
                    </IconButton>
                </div>
                <div
                    style={{
                        marginTop: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <IconText text={this.props.email} position="left" distance="0.4rem">
                        <Mail stroke="#3a506b" />
                    </IconText>
                    {/* TODO: Link to a methode */}
                    <IconButton text="Annehmen" distance="0.8rem">
                        <Check stroke="#19BA3F" />
                    </IconButton>
                </div>
            </div>
        );
    }
}

export default AddRequest;
