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

    componentDidUpdate() {
        console.log("------------------- D E B U G ------------------");
        console.log("firstName: " + this.state.firstName);
        console.log("lastName: " + this.state.lastName);
        console.log("password: " + this.state.password);
        console.log("password2: " + this.state.password2);
        console.log("mail: " + this.state.mail);
        console.log("role: " + this.state.role);
        console.log("accepted: " + this.state.accepted);
        console.log("visible: " + this.state.visible);
        console.log("clicked: " + this.state.clicked);
        console.log("------------------- D E B U G...END ------------");
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
        setTimeout(() => {
            console.log(this.state.accepted);
        }, 2000);
    };

    handleSpecial = e => {
        console.log(this.state.role);
        e.preventDefault();
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

    handleSubmit = () => {
        console.log("------------------- S U B M I T ------------------");
        console.log("firstName: " + this.state.firstName);
        console.log("lastName: " + this.state.lastName);
        console.log("password: " + this.state.password);
        console.log("password2: " + this.state.password2);
        console.log("mail: " + this.state.mail);
        console.log("role: " + this.state.role);
        console.log("accepted: " + this.state.accepted);
        console.log("visible: " + this.state.visible);
        console.log("clicked: " + this.state.clicked);
        console.log("------------------- S U B M I T ... END------------");
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
                                                    onChange={this.handleInput}
                                                    type="text"
                                                    name="mail"
                                                    value={this.state.mail}
                                                    placeholder="Email"
                                                    className="input-field"
                                                    required
                                                ></input>
                                            </div>

                                            <div className="input-box">
                                                <input
                                                    onChange={this.handleInput}
                                                    name="password"
                                                    value={this.state.password}
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
                                                    onChange={this.handleInput}
                                                    value={this.state.password2}
                                                    name="password2"
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
                                                        value={
                                                            this.state.accepted
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
                                                    value={this.state.firstName}
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
                                                    value={this.state.lastName}
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
