import React from 'react';
import './Confirmation.scss';
import { AlertTriangle } from 'react-feather';
import Button from '../../ui/button/Button';
import { t } from '../../../i18n/i18n';

interface ConfirmationProps {
    deleteHandler: any;
    closeHandler: any;
}

class Confirmation extends React.Component<ConfirmationProps> {
    render() {
        return (
            <div className="confirmation-box">
                <h1 style={{ color: 'red' }}>{t.t('component.confirmation.sure', 'Are you sure?')}</h1>
                <p className="text">{t.t('component.confirmation.irreversible', 'This step is irreversible')}</p>
                <AlertTriangle size="15rem" color="red" />
                <Button
                    onClick={this.props.deleteHandler}
                    width="20rem"
                    styleType="warning"
                    name={t.t('page.settings.deleteAccount', 'Delete Account')}
                />
                <button type="button" onClick={this.props.closeHandler} className="button cancel" name="Cancel">
                    {t.t('component.button.cancel', 'Cancel')}
                </button>
            </div>
        );
    }
}

export default Confirmation;
