import React, { Component } from 'react';
import axios from 'axios';
import './index.scss';
import eye from '../../assets/icons/eye.svg';
import eyeOff from '../../assets/icons/eye-off.svg';

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
			eye: true
		};
	}

	componentDidUpdate() {
		console.log(this.state);
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

	hideEye = () => {};

	handleError = () => {
		if (this.state.accepted != true) {
			console.log("Bitte Datenschutz zustimmen");
			document.getElementById("btn-Submit").disabled = true;
		}
		if (this.state.password != this.state.password2) {
			console.log("Passwörter stimmen nicht überein");
		}
		if (this.state.mail == "") {
			console.log("Mail angeben");
		}
		if (this.state.role == "") {
			console.log("Bitte Rolle angeben");
		}
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
			<div className="registerComponent">
				<div className="box">
					<h1 id="Headline">Register</h1>
					<form className="" action="" method="post">
						<div className="boxinhalt">
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
												></input>
                                            </div>

                                            <div className="input-box second">
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
                                                    <img
														className=""
														src={eye}
													></img>
                                                    <i
														id="hide2"
														className="fa fa-eye-slash"
													></i>
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
												></input>
                                                <span className="eye">
                                                    <img
														id=""
														className=""
														src={eye}
													></img>
                                                    <i
														id="hide2"
														className="fa fa-eye-slash"
													></i>
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
													></input>{" "}
													<span className="font-arimo">
                                                        Ich habe die
                                                        <link to="/">
                                                            Datenschutzbestimmungen
                                                        </link>
                                                        gelesen und akzeptiert
                                                    </span>
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
													onClick={this.handleError}
													className="btn-UI btn-Base"
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
			</div>
		);
	}
}
export default Register;
