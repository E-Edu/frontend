import React from "react";
import "./index.scss";
import eye from "../../assets/icons/eye.svg";
import eye_off from "../../assets/icons/eye-off.svg";
import teacher from "../../assets/icons/teacher.svg";
import UserIcon from "../../components/icons/user.icon";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

// Regular Expression für die Validierung der Mail
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Validates Form errors
const formValid = ({ formErrors, ...rest }) => {
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
            formErrors: {
                firsName: "",
                lastName: "",
                role: "",
                email: "",
                password: ""
            }
        };
    }

    // ----------------- AXIOS -------------------------
    /*
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
            const user = res.data;
            this.setState({ persons: res.data });
            console.log(res);
        });
	}
	*/

    // ----------------- AXIOS END -------------------------
    /*
    componentDidUpdate() {
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
	*/

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
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

            case "email":
                formErrors.email = emailRegex.test(value)
                    ? ""
                    : "invalid email address";
                break;

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
                break;
        }
        this.setState({ formErrors, [name]: value }, () =>
            console.log(this.state)
        );
    };

    // Stores text input into corresponding states
    handleInput = field => {
        this.setState({ [field.target.name]: field.target.value });
        console.log(this.state.mail);
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

    /*
    handleRedirect = () => {
        this.props.history.push("/");
    };
*/

    // Toggeles the password field to text - toggles the icon in the jsx (ternary statement below)
    togglePassword = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    // Toggeles the second password field to text - toggles the icon in the jsx (ternary statement below)
    togglePassword2 = () => {
        const { isPasswordShown2 } = this.state;
        this.setState({ isPasswordShown2: !isPasswordShown2 });
    };

    // Validate password --- WORK IN PROGRESS
    validatePassword = () => {
        if (this.state.password2 != this.state.password) {
        }
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
        const { isPasswordShown } = this.state;
        const { isPasswordShown2 } = this.state;
        const { isPasswordValid } = this.state;
        const { formErrors } = this.state;

        return (
            <div className="register">
                <div className="box">
                    <h1 id="Headline">Register</h1>
                    <form onSubmit={this.handleSubmit} method="post" noValidate>
                        <div className="box-inhalt">
                            {(() => {
                                if (this.state.clicked) {
                                    return (
                                        <span>
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
                                            <div
                                                onClick={this.handleRedirect}
                                                className="btn-UI-container"
                                            >
                                                <button
                                                    to="/"
                                                    onClick={this.handleSubmit}
                                                    type="submit"
                                                    className="btn-UI btn-Base"
                                                    disabled={
                                                        this.state.disabled
                                                    }
                                                >
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
                                                <button
                                                    onClick={this.handleChange}
                                                    value="Student"
                                                    name="role"
                                                    className="btn-specialButton"
                                                    id="btn-specialButton1"
                                                >
                                                    <UserIcon stroke="black"></UserIcon>
                                                    <span>Student</span>
                                                </button>
                                                <button
                                                    onClick={this.handleChange}
                                                    value="Teacher"
                                                    name="role"
                                                    className="btn-specialButton"
                                                    id="btn-specialButton1"
                                                >
                                                    <span>Teacher</span>
                                                </button>
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
