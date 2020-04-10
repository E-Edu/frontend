import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { HelpCircle, LogOut } from 'react-feather';

class Header extends Component {
    render() {
        switch (this.props.side) {
            case 'Landing':
                return (
                    <div className="header-navbar">
                        <div className="logo">
                            <img className="logo-img" src="/assets/logo.svg" alt="" />
                            <h1 className="title">E-EDU</h1>
                        </div>
                        <div className="button-box-landing">
                            {/* TODO Route zurück auf /login /register */}
                            <Link className="btn-log btn-login" to="/dashboard">
                                LOGIN
                            </Link>
                            <Link className="btn-log btn-register" to="/dashboard">
                                REGISTER
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
                        <div id="button-box-dashboard">
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
