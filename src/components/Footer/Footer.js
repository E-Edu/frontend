import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { GitHub } from 'react-feather';

class Footer extends Component {
    render() {
        if (this.props.visible) {
            return null;
        }

        return (
            <div className="footer-navbar">
                <div className="legal">
                    <Link to="/imprint" className="imprint-link">Impressum</Link>
                    <Link to="/privacy" className="privacy-link">Datenschutzerklärung</Link>
                    <Link to="/credits" className="credits-link">Credits</Link>
                    <a href="https://github.com/E-Edu/general" className="github-link">
                        <GitHub color="#5bc0be" />
                    </a>
                </div>
                <div className="copyright">
                    <span>&copy; 2020 The Morpheus Tutorials Community</span>
                </div>
            </div>
        );
    }
}

export default Footer;
