import React, {Component} from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import Help_Image from '../../assets/icons/helpcircle.svg';
import Logout_Image from '../../assets/icons/logout.svg';

class Header extends Component {
    render() {
        switch (this.props.side) {
            case 'Landing':
                return (
                    <div className='headerNavbar'>
                        <div className="logo">
                            <img id="logoImg" src="assets/logo.svg" alt=""/>
                            <h1 id='title'>E-EDU</h1>
                        </div>
                        <div id='Button_Box_Landing'>
                            {/*TODO Route zurück auf /login /register*/}
                            <Link className='BTN_Log' id='Button_Login' to={'/dashboard'}>
                                LOGIN
                            </Link>
                            <Link className='BTN_Log' id='Button_Register' to={'/dashboard'}>
                                REGISTER
                            </Link>
                        </div>
                    </div>
                );
            case 'Dashboard':
                return (
                    <div className='headerNavbar'>
                            <Link to={'/'} style={{textDecoration: "none"}}>
                                <div className="logo">
                                    <img id="logoImg" src="assets/logo.svg" alt=""/>
                                    <h1 id='title'>E-EDU</h1>
                                </div>
                            </Link>
                        <div id='Button_Box_Dashboard'>
                            <Link to={{pathname: '/imprint', state: { prevPath: "Dashboard" }}} className='BTN_Dash' id='Button_Info' >
                                <img src={Help_Image} alt='Help'/>
                            </Link>
                            <Link className='BTN_Dash' id='Button_Logout'>
                                <img src={Logout_Image} alt='Logout'/>
                            </Link>
                        </div>
                    </div>
                );
        }
        return null;
    }
}

export default Header;

