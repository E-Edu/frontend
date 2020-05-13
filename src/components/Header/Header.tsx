import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { HelpCircle, LogOut } from 'react-feather';
import { t } from '../../i18n/i18n';

interface HeaderInterface {
    site?: string;
}

class Header extends React.Component<HeaderInterface> {
    render() {
        switch (this.props.site) {
            case 'landing':
                return (
                    <div className="header-navbar">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                <img className="logo-img" src="/assets/logo.svg" alt="" />
                                <h1 className="title">E-EDU</h1>
                            </div>
                        </Link>
                        <div className="button-box-landing">
                            {/* TODO Route zurück auf /login */}
                            <Link className="btn-log btn-login" to="/dashboard">
                                {t.t('component.login.login', 'LOGIN')}
                            </Link>
                            <Link className="btn-log btn-register" to="/register">
                                {t.t('component.register.register', 'REGISTER')}
                            </Link>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="header-navbar">
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <div className="logo">
                                <img className="logo-img" src="/assets/logo.svg" alt="" />
                                <h1 className="title">E-EDU</h1>
                            </div>
                        </Link>
                        <div className="button-box-dashboard">
                            <Link
                                to={{ pathname: '/imprint', state: { prevPath: 'Dashboard' } }}
                                className="btn-dash btn-info">
                                <HelpCircle />
                            </Link>
                            <Link className="btn-dash btn-logout" to="/">
                                <LogOut />
                            </Link>
                        </div>
                    </div>
                );
        }
    }
}

export default Header;
