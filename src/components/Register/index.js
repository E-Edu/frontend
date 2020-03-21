import React, { Component } from "react";
import "./index.scss";
import { Link, Redirect } from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            password2: "",
            mail: "",
            role: "",
            accepted: false,
            visible: true,
            clicked: false
        };
    }

    handleInput = field => {
        var newState = {};
        newState[field.target.name] = field.target.value;
        this.setState(newState);
        console.log(newState);
    };

    handleClick = () => {
        this.setState({
            clicked: true
        });
    };

    handlePrivacy = () => {
        this.setState({
            accepted: !this.state.accepted
        });
        console.log(this.state.accepted);
    };

    handleSpecial = e => {
        console.log(this.state.role);

        this.setState({
            role: e.target.value
        });
        setTimeout(() => {
            console.log(this.state.role);
        }, 2000);
    };

    handleRedirect = () => {
        this.props.history.push("/");
    };

    /*
    handleSpecial(e) {
        this.setState({
            role: e.target.value
        });
        console.log(e.target.value);
    }
*/
    render() {
        return (
            <div>
                <div>
                    <form className="box" action="loginPop.html" method="post">
                        <div className="boxinhalt">
                            <h1 id="Headline">Register</h1>

                            {(() => {
                                if (this.state.clicked) {
                                    return (
                                        <span>
                                            <div className="input-box">
                                                <input
                                                    type="text"
                                                    name=""
                                                    placeholder="Email"
                                                    className="input-field"
                                                    required
                                                ></input>
                                            </div>

                                            <div className="input-box">
                                                <input
                                                    type="password"
                                                    id="passwort"
                                                    placeholder="Passwort"
                                                    className="input-field"
                                                    required
                                                ></input>
                                                <span className="eye">
                                                    <i
                                                        id="hide1"
                                                        className="fa fa-eye"
                                                    ></i>
                                                    <i
                                                        id="hide2"
                                                        className="fa fa-eye-slash"
                                                    ></i>
                                                </span>
                                            </div>

                                            <div className="input-box">
                                                <input
                                                    type="password"
                                                    id="passwort"
                                                    placeholder="Passwort wiederholen"
                                                    className="input-field"
                                                    required
                                                ></input>
                                                <span className="eye">
                                                    <i
                                                        id="hide1"
                                                        className="fa fa-eye"
                                                    ></i>
                                                    <i
                                                        id="hide2"
                                                        className="fa fa-eye-slash"
                                                    ></i>
                                                </span>
                                            </div>

                                            <div className="checkContainer">
                                                <p>
                                                    <input
                                                        onClick={
                                                            this.handlePrivacy
                                                        }
                                                        type="checkbox"
                                                    ></input>{" "}
                                                    Ich habe die{" "}
                                                    <Link to="/">
                                                        Datenschutzbestimmungen
                                                    </Link>{" "}
                                                    gelesen und akzeptiert
                                                </p>
                                            </div>
                                            <div
                                                onClick={this.handleRedirect}
                                                className="btn-UI-container"
                                            >
                                                <button className="btn-UI">
                                                    Abbrechen
                                                </button>
                                                <button
                                                    onClick={this.handleClick}
                                                    className="btn-UI btn-weiter"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span>
                                            <div className="input-box">
                                                <input
                                                    onChange={this.handleInput}
                                                    type="text"
                                                    name="firstName"
                                                    placeholder="Vorname"
                                                    className="input-field"
                                                    required
                                                ></input>
                                            </div>

                                            <div className="input-box">
                                                <input
                                                    onChange={this.handleInput}
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Nachname"
                                                    className="input-field"
                                                    required
                                                ></input>
                                            </div>
                                            <div className="btn-group roleBtn">
                                                <button
                                                    onClick={this.handleSpecial}
                                                    value="Student"
                                                    className="btn-specialButton"
                                                    id="btn-specialButton1"
                                                >
                                                    Student
                                                </button>
                                                <button
                                                    onClick={this.handleSpecial}
                                                    value="Teacher"
                                                    className="btn-specialButton"
                                                    id="btn-specialButton2"
                                                >
                                                    Teacher
                                                </button>
                                            </div>

                                            <div className="btn-UI-container">
                                                <button
                                                    onClick={
                                                        this.handleRedirect
                                                    }
                                                    className="btn-UI"
                                                >
                                                    Abbrechen
                                                </button>
                                                <button
                                                    onClick={this.handleClick}
                                                    className="btn-UI btn-weiter"
                                                >
                                                    Weiter
                                                </button>
                                            </div>
                                        </span>
                                    );
                                }
                            })()}
                        </div>
                    </form>
                </div>
                ;
            </div>
        );
    }
}
export default Register;
