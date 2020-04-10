import React from 'react';
// import axios from 'axios';
import './Login.scss';
import { Eye, EyeOff } from 'react-feather';

class Login extends React.Component {


    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswortChange = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        /*
        const user = { email: this.state.email, password: this.state.password };
        
        const response = axios.post(`https://jsonplaceholder.typicode.com/users`, { user }).then(
            
            (res) => {
                 axios.post(`https://user.e-edu.the-morpheus.de/users/login`, {user}).then(res => { 
            },
            (onerror) => {}
        );

        if (response) {
            this.props.history.push('/dashboard');
        }
        */
    };

    /** Method to switch between visibility and non-visibility
     * @public
     */
    changeVisibility() {
        /*const passwortType = document.getElementById('password');
        const hiddenEye = document.getElementById('hide1');
        const openEye = document.getElementById('hide2');

        if (passwortType.type === 'password') {
            passwortType.type = 'text';
            hiddenEye.style.display = 'block';
            openEye.style.display = 'none';
        } else {
            passwortType.type = 'password';
            hiddenEye.style.display = 'none';
            openEye.style.display = 'block';
        }*/
        //TODO not with document.getElementById. Thats not the react style
    }

    render() {
        return (
            <div className="login-component">
                {/* describes the login-popup */}
                <form className="box" onSubmit={this.handleSubmit} action="loginPop.html" method="post">
                    <div className="boxinhalt">
                        <h1 className="headline">L O G I N</h1>
                        {/* describes the email-input-box */}
                        <div className="input-box">
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter Email..."
                                className="input-field"
                                required
                                onChange={this.handleEmailChange}
                            />
                        </div>
                        {/* describes the password-input-box */}
                        <div className="input-box">
                            <input
                                type="password"
                                name="passwort"
                                placeholder="Enter Password..."
                                className="input-field passwort"
                                required
                                onChange={this.handlePasswortChange}
                            />
                            {/* describes the two eye-icons in the field */}
                            <span
                                className="eye"
                                style={{ outline: 'none' }}
                                onClick={this.changeVisibility}
                                role="button"
                                tabIndex={1}>
                                <Eye className="hide1"/>
                                <EyeOff className="hide2"/>
                            </span>
                        </div>
                        {/* describes the google-login-field */}
                        <button className="pointer google-login" type="button">
                            <img
                                className="google-bild"
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                alt="log in with google"
                            />
                            Log In with Google
                        </button>
                        <input type="submit" className="login button pointer" value="Log In"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
