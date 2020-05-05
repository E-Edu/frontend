import React from 'react';
import { Redirect } from 'react-router-dom';

interface ValidateEmailProps {
    match: any;
}

class ValidateEmail extends React.Component<ValidateEmailProps> {
    render() {
        const { match } = this.props;
        if (match.params.token === 'dgdfgdfg') {
            return <Redirect to="/dashboard" />;
        }
        return <Redirect to="/error404" />;
    }
}

export default ValidateEmail;
