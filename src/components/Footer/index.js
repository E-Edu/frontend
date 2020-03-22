import React, {Component} from 'react';
import './index.scss';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer-nav'>
                <div className='group nav'>
                    <span><Link to='/imprint'>Impressum</Link></span>
                    <span><Link to='/privacy'>Datenschutzerklärung</Link></span>
                    <span><Link to='/credits'>Credits</Link></span>
                </div>
                <div className='group'>
                    <span>&copy; 2020 The Morpheus Tutorials Community</span>
                </div>
            </div>
        );
    }
}

export default Footer;
