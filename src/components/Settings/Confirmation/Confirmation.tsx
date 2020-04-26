import React from 'react';
import './Confirmation.scss';
import { AlertTriangle } from 'react-feather';
import Button from '../../ui/button/Button';

interface ConfirmationProps {
    deleteHandler: any;
    closeHandler: any;
}

class Confirmation extends React.Component<ConfirmationProps> {
    render() {
        return (
            <div className="confirmation-box">
                <h1 style={{ color: 'red' }}>Bist du dir sicher?</h1>
                <p className="text">Dieser Schritt kann nicht rückgängig gemacht werden</p>
                <AlertTriangle size="15rem" color="red" />
                <Button onClick={this.props.deleteHandler} width="20rem" styleType="warning" name="Delete Account" />
                <button type="button" onClick={this.props.closeHandler} className="button cancel" name="Cancel">
                    Cancel
                </button>
            </div>
        );
    }
}

export default Confirmation;
