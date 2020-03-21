import React, { Component } from "react";
import "./index.scss";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            mail: "",
            role: "",
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

    render() {
        return (
            <div>
                <div>
                    <form className="box" action="loginPop.html" method="post">
                        <div className="boxinhalt">
                            <h1 id="Headline"> R E G I S T E R</h1>

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
                                                    <input type="checkbox"></input>{" "}
                                                    Ich habe die{" "}
                                                    <a href="">
                                                        Datenschutzbestimmungen
                                                    </a>{" "}
                                                    gelesen und akzeptiert
                                                </p>
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
                                                    className="btn-specialButton"
                                                    id="btn-specialButton1"
                                                >
                                                    Student
                                                </button>
                                                <button
                                                    className="btn-specialButton"
                                                    id="btn-specialButton2"
                                                >
                                                    Teacher
                                                </button>
                                            </div>
                                        </span>
                                    );
                                }
                            })()}

                            <div className="btn-UI-container">
                                <button className="btn-UI">Abbrechen</button>
                                <button
                                    onClick={this.handleClick}
                                    className="btn-UI btn-weiter"
                                >
                                    Weiter
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                ;
            </div>
        );
    }
}
export default Register;
