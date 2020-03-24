import React from "react";
import "./index.scss";
import eye from "../../assets/icons/eye.svg";
import {Link, Redirect} from "react-router-dom";

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
            clicked: false,
            valid: false,
            disabled: true,
            eye: true
        };
    }

    testValid = event => {
        let data = this.state;
        let valid = true;
        Object.keys(data).forEach(function (key) {
            if (!data[key]) {
                valid = false;
            }
            console.log(key, data[key]);
        });
        event.preventDefault();
        console.log(valid);
        return valid;
    };

    componentDidUpdate() {
        console.log(this.state);
        if (
            this.state.mail !== "" &&
            this.state.role !== "" &&
            this.state.firstName !== "" &&
            this.state.lastName !== "" &&
            this.state.accepted !== false &&
            this.state.password === this.state.password2 &&
            this.state.disabled
        ) {
            this.setState({
                disabled: false
            });
        }
    }

    handleInput = field => {
        this.setState({[field.target.name]: field.target.value});
        console.log(this.state);
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

    hideEye = () => {
    };

    handleSubmit = () => {
        console.log("handle error vor dem if");
        if (
            this.state.mail !== "" &&
            this.state.role !== "" &&
            this.state.firstName !== "" &&
            this.state.lastName !== "" &&
            this.state.accepted !== false &&
            this.state.password === this.state.password2 &&
            this.state.disabled
        ) {
            console.log("jetzt redirect bitte");
            this.setState({redirect: "/dashboard"});
        }
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
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect}/>;
        }
        return (
            <div className="register">
                <div className="box">
                    <h1 id="Headline">Register</h1>
                    <form
                        className=""
                        action=""
                        method="post"
                        onSubmit={this.handleSubmit}
                    >
                        <div className="box-inhalt">
                            {(() => {
                                if (this.state.clicked) {
                                    return (
                                        <span>
                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleInput}
                                                    type="text"
                                                    name="mail"
                                                    value={this.state.mail}
                                                    placeholder="Email"
                                                    className="input-field"
                                                    required
                                                />
                                            </div>

                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleInput}
                                                    value={this.state.password}
                                                    name="password"
                                                    type="password"
                                                    id="passwort"
                                                    placeholder="Passwort"
                                                    className="input-field"
                                                    required
                                                />
                                                <span className="eye">
                                                    <img
                                                        className=""
                                                        src={eye}
                                                        alt="eye"
                                                    />
                                                    <i
                                                        id="hide2"
                                                        className="fa fa-eye-slash"
                                                    />
                                                </span>
                                            </div>

                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleInput}
                                                    value={this.state.password2}
                                                    name="password2"
                                                    type="password"
                                                    id="passwort"
                                                    placeholder="Passwort wiederholen"
                                                    className="input-field"
                                                    required
                                                />
                                                <span className="eye">
                                                    <img
                                                        id=""
                                                        className=""
                                                        src={eye}
                                                        alt="eye"
                                                    />
                                                    <i
                                                        id="hide2"
                                                        className="fa fa-eye-slash"
                                                    />
                                                </span>
                                            </div>

                                            <div className="checkContainer">
                                                <p>
                                                    <input
                                                        className="privacycheck"
                                                        onClick={
                                                            this.handlePrivacy
                                                        }
                                                        value={
                                                            this.state.accepted
                                                        }
                                                        type="checkbox"
                                                    />{" "}
                                                    <span className="font-arimo">
                                                        Ich habe die
                                                        <Link to="/">
                                                            Datenschutzbestimmungen
                                                        </Link>
                                                        gelesen und akzeptiert
                                                    </span>
                                                </p>
                                            </div>
                                            <div
                                                onClick={this.handleRedirect}
                                                className="btn-UI-container"
                                            >
                                                <button
                                                    className="btn-UI btn-Base"
                                                    disabled={
                                                        this.state.disabled
                                                    }
                                                    onSubmit={this.handleSubmit}
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
                                                />
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
                                                />
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
            </div>
        );
    }
}

export default Register;
