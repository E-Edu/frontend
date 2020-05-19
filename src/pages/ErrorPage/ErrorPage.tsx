import React from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';
import ErrorIcon from '../../components/icons/ErrorIcon';
import { t } from '../../i18n/i18n';

class ErrorPage extends React.Component {
    render() {
        return (
            <div className="error404">
                <ErrorIcon width="40%" />
                <h1>{t.t('error.heading', 'Oops, looks like here is nothing')}</h1>
                <p>
                    {t.t('error.description', 'The page you are looking for does not exist! Go back to')}{' '}
                    <Link to="/" className="error-link">
                        {t.t('error.link', 'home')}
                    </Link>
                </p>
            </div>
        );
    }
}
export default ErrorPage;
