import React, { Component } from "react";
import axios from "axios";
import "./index.scss";

class Template extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: "",
        password: ""
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
        console.log(this.state.email);
    };

    handlePasswortChange = event => {
        this.setState({ password: event.target.value });
        console.log(this.state.password);
    };

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };

        const response = axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(
                res => {
                    /*axios.post(`https://user.e-edu.the-morpheus.de/users/login`, {user}).then(res => {*/
                    console.log(res);
                    console.log(res.data);
                },
                onerror => {
                    console.log("False Data");
                }
            );
        if (response) {
            this.props.history.push("/dashboard");
        }
    };

    /** Method to switch between visibility and non-visibility
     * @public
     */
    changeVisibility() {
        let passwortType = document.getElementById("password");
        let hiddenEye = document.getElementById("hide1");
        let openEye = document.getElementById("hide2");

        if (passwortType.type === "password") {
            passwortType.type = "text";
            hiddenEye.style.display = "block";
            openEye.style.display = "none";
        } else {
            passwortType.type = "password";
            hiddenEye.style.display = "none";
            openEye.style.display = "block";
        }
    }

    render() {
        return (
            <div>
                {/*describes the login-popup*/}
                <form
                    className="box"
                    onSubmit={this.handleSubmit}
                    action="loginPop.html"
                    method="post"
                >
                    <div className="boxinhalt">
                        <h1 id="Headline"> L O G I N</h1>
                        {/*describes the email-input-box*/}
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
                        {/*describes the password-input-box*/}
                        <div className="input-box">
                            <input
                                type="password"
                                name="passwort"
                                id="passwort"
                                placeholder="Enter Password..."
                                className="input-field"
                                required
                                onChange={this.handlePasswortChange}
                            />
                            {/*describes the two eye-icons in the field*/}
                            <span
                                className="eye"
                                onClick={this.changeVisibility}
                            >
                                <img id="hide1" src="assets/eye.svg" />
                                <img id="hide2" src="assets/eye-off.svg" />
                            </span>
                        </div>
                        {/*describes the google-login-field*/}
                        <button id="google-login">
                            <img
                                id="googleBild"
                                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                            />
                            Log In with Google
                        </button>
                        <input
                            type="submit"
                            className=""
                            id="login"
                            className="button"
                            value="Log In"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Template;
