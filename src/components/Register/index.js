import React from "react";
import "./index.scss";
import eye from "../../assets/icons/eye.svg";
import eye_off from "../../assets/icons/eye-off.svg";
import TeacherIcon from "../../components/icons/teacher.icon";
import UserIcon from "../../components/icons/user.icon";
import {Link} from "react-router-dom";

// Regular Expression für die Validierung der Mail
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Validates Form errors
const formValid = ({formErrors, ...rest}) => {
    let valid = true;

    Object.values(formErrors).forEach(val => val.length > 0 && (valid = false));
    return valid;

    Object.values(rest).forEach(val => {
        val === null && (valid = false);
    });
};

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
            clicked: false,
            disabled: true,
            isPasswordShown: false,
            isPasswordShown2: false,
            isPasswordValid: true,
            isStudent: true,
            formErrors: {
                firsName: "",
                lastName: "",
                role: "",
                email: "",
                password: ""
            }
        };
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        console.log("Name: ", name);
        console.log("Value: ", value);

        switch (name) {
            case "firstName":
                formErrors.firstName =
                    value.length < 3 ? "minimum 3 characters required " : "";
                break;

            case "lastName":
                formErrors.lastName =
                    value.length < 3 ? "minimum 3 characters required " : "";
                break;

            case "role":
                formErrors.role = value === "" ? "Please select your role" : "";

            case "password":
                formErrors.password =
                    value.length < 6 ? "minimum 6 characters required " : "";
                break;
            case "password2":
                formErrors.password2 =
                    value != value.password
                        ? "Passwörter sind unterschiedlich"
                        : "";
                break;
            default:
                console.log("Break");
                break;
        }
        this.setState({formErrors, [name]: value}, () =>
            console.log(this.state)
        );
    };

    // Shows second page of register
    handleClick = () => {
        this.setState({
            clicked: true
        });
    };

    // Determines if user accepted the privacy policy
    handlePrivacy = () => {
        this.setState({
            accepted: !this.state.accepted
        });
        setTimeout(() => {
            console.log(this.state.accepted);
        }, 2000);
    };

    // Handles the two special Buttons student and teacher
    handleSpecial(e, data) {
        e.preventDefault();
        console.log(data);
        let student = true;
        if (data == "Teacher") student = false;

        this.setState({
            role: data,
            isStudent: student
        });
    }

    // Toggeles the password field to text - toggles the icon in the jsx (ternary statement below)
    togglePassword = () => {
        const {isPasswordShown} = this.state;
        this.setState({isPasswordShown: !isPasswordShown});
    };

    // Toggeles the second password field to text - toggles the icon in the jsx (ternary statement below)
    togglePassword2 = () => {
        const {isPasswordShown2} = this.state;
        this.setState({isPasswordShown2: !isPasswordShown2});
    };

    // Sends the form - implemented on the submit button, not onSubmit (Form)
    /*
    handleSubmit = event => {
        console.log("--- SUBMIT FUNKTION ---");
        event.preventDefault();

        const user = {
            name: this.state.firstName
            /*
			<<< HIER WENN SCHNITTSTELLE DA >>>
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            email: this.state.mail,
            role: this.state.role  <--- eventuell einen neuen State<int> machen
       
        };

        axios
            .post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
    };
*/
    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(`
		-- SUBMITTING --
		First Name: ${this.state.firstName}
		Last Name: ${this.state.lastName}
		Mail: ${this.state.email}
		Password: ${this.state.password}
		Role: ${this.state.role}
		`);
        } else {
            console.log("FORM INVALID - ERROR MSG");
        }
    };

    render() {
        // constants for the toggle functions (eye and password)
        const {isPasswordShown} = this.state;
        const {isPasswordShown2} = this.state;
        const {isPasswordValid} = this.state;
        const {formErrors} = this.state;

        return (
            <div className="register">
                <div className="box">
                    <h1 id="Headline">Register</h1>
                    <form onSubmit={this.handleSubmit} method="post" noValidate>
                        <div className="box-inhalt">
                            {(() => {
                                if (this.state.clicked) {
                                    return (
                                        <span className="yo">
                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleChange}
                                                    type="email"
                                                    name="mail"
                                                    value={this.state.mail}
                                                    placeholder="Email"
                                                    className="input-field"
                                                    noValidate
                                                />
                                            </div>

                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                    name="password"
                                                    type={
                                                        isPasswordShown
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    id="passwort"
                                                    placeholder="Passwort"
                                                    className="input-field"
                                                    noValidate
                                                />
                                                <span
                                                    className="eye"
                                                    onClick={
                                                        this.togglePassword
                                                    }
                                                >
                                                    <img
                                                        className=""
                                                        src={
                                                            isPasswordShown
                                                                ? eye_off
                                                                : eye
                                                        }
                                                    />
                                                    <i
                                                        id="hide2"
                                                        className="fa fa-eye-slash"
                                                    />
                                                </span>
                                            </div>

                                            <div className="input-box second">
                                                <input
                                                    onChange={this.handleChange}
                                                    value={this.state.password2}
                                                    name="password2"
                                                    type={
                                                        isPasswordShown2
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    id="passwort"
                                                    placeholder="Passwort wiederholen"
                                                    className="input-field"
                                                    noValidate
                                                />
                                                <span className="eye">
                                                    <img
                                                        onClick={
                                                            this.togglePassword2
                                                        }
                                                        src={
                                                            isPasswordShown2
                                                                ? eye_off
                                                                : eye
                                                        }
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
                                            <div onClick={this.handleRedirect} className="btn-UI-container">
                                                <button to="/"
                                                        onClick={this.handleSubmit}
                                                        type="submit"
                                                        className="btn-UI btn-Base"
                                                        disabled={this.state.disabled}>
                                                    Submit
                                                </button>
                                            </div>
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span className="input-container">
                                            <div className="input-box">
                                                <input
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="firstName"
                                                    value={this.state.firstName}
                                                    placeholder="Vorname"
                                                    className="input-field"
                                                    noValidate
                                                />
                                            </div>
                                            <div className="input-box">
                                                <input
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    name="lastName"
                                                    value={this.state.lastName}
                                                    placeholder="Nachname"
                                                    className="input-field"
                                                    required
                                                />
                                            </div>
                                            <div className="btn-group roleBtn">
                                                <div onClick={e => this.handleSpecial(e, "Student")}
                                                     className="btn-specialButton btn"
                                                     className={this.state.isStudent ? "btn-specialButton btn active"
                                                         : "btn-specialButton btn"
                                                     }
                                                     id="btn-specialButton1">
                                                    <UserIcon stroke="black"></UserIcon>
                                                    <span>Student</span>
                                                </div>

                                                <div
                                                    onClick={e => this.handleSpecial(e, "Teacher")}
                                                    className={this.state.isStudent ?
                                                        "btn-specialButton btn-specialButton2 btn"
                                                        : "btn-specialButton btn-specialButton2 btn active"
                                                    }
                                                    id="btn-specialButton2"
                                                >
                                                    <span>Teacher</span>
                                                    <TeacherIcon></TeacherIcon>
                                                </div>
                                            </div>

                                            <div className="btn-UI-container">
                                                <button
                                                    onClick={this.handleClick}
                                                    className="btn-UI btn-weiter"
                                                    type="button"
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
