import React, { Component } from "react";
import "./AddTeacher.scss";
import icon_user_plus from "../../assets/icons/user-plus.svg";
import Page from "../../components/Page/Page";
import TextInput from "../../components/Input/TextBox/TextInput";
import { Translation } from "../../i18n/i18n";
import AddTeacherRequest from "./AddTeacherRequest/AddTeacherRequest";

class AddTeacher extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        validEmail: false,
        email: "",
        pendingRequests: [
            ["Herr Lehrer Mustermann", "lehrer.mustermann@lehrer-mail.de"],
            ["Herr Lehrer Mustermann2", "lehrer.mustermann2@lehrer-mail.de"]
        ]
    };

    isValidEmail() {
        const regex =
<<<<<<< HEAD
            '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
        const email = document.getElementById('teacherEmail').value;
        return email.match(regex) !== null;
=======
            "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
        return this.state.email.match(regex) !== null;
>>>>>>> Implemented teacher requests
    }

    emailChange = (event) => {
        this.state.email = event.target.value;
        this.state.validEmail = this.isValidEmail();
        console.log(this.state);
        this.setState(this.state);
    };

    add = () => {
        this.state.validEmail = this.isValidEmail();
        this.setState(this.state);
        if (this.state.validEmail) alert("Teacher added");
    };

<<<<<<< HEAD
    render() {
        const pendingRequests = [
            ['Herr Lehrer Mustermann', 'lehrer.mustermann@lehrer-mail.de'],
            ['Herr Lehrer Mustermann2', 'lehrer.mustermann2@lehrer-mail.de'],
        ];
        let requestsHeadline = 'ausstehende Anfragen';
        if (pendingRequests.length === 0) {
            requestsHeadline = `Keine ${requestsHeadline}`;
        }
        const requestsText = pendingRequests.map((request) => {
            return (
                <div
                    style={{
                        position: 'relative',
                        marginBottom: 10,
                        display: 'flex',
                    }}
                    key={request[0]}>
                    <AddRequest name={request[0]} email={request[1]} />
                </div>
=======
    renderRequests() {
        return this.state.pendingRequests.map((request, index) => {
            return (
                <AddTeacherRequest key={index} name={request[0]} email={request[1]}/>
>>>>>>> Implemented teacher requests
            );
        });
    }

    render() {
        return (
<<<<<<< HEAD
            <div>
                <div className="main">
                    <div style={{ marginLeft: 50 }}>
                        <h1 className="text-dark add-teacher-text-content">Lehrer hinzufügen</h1>
                        <div style={{ display: 'flex' }}>
                            <input
                                type="text"
                                className="teacher-email"
                                placeholder="Email des Lehrers"
                                style={{ padding: 5 }}
                                /* className={this.state.valid } TODO bessere lösung finden */
                                onChange={this.emailChange}
                            />
                            <img
                                src={icon_user_plus}
                                alt="user-plus-icon"
                                style={{
                                    border: 'solid',
                                    borderWidth: 2,
                                    borderRadius: 8,
                                    marginLeft: 20,
                                    padding: 5,
                                    borderColor: '#1c2541',
                                }}
                                onClick={this.add}
                            />
                        </div>
                        <h1>{requestsHeadline}</h1>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>{requestsText}</div>
=======
            <Page
                mainTitle={Translation.t("addTeacher.title")}>
                <div className="add-teacher">
                    <TextInput
                        shadow={this.state.validEmail || this.state.email === "" ? "" : "red"}
                        maxWidth="30rem"
                        placeholder={Translation.t("addTeacher.emailOfTeacher")}
                        onChange={this.emailChange}
                        className="test"
                    />
                    <img
                        className="add-teacher-button"
                        src={icon_user_plus}
                        alt="user-plus-icon"
                        onClick={this.add}
                    />
                </div>
                <h1 className="requests-title">{
                    Translation.t(
                        "addTeacher." + (this.state.pendingRequests.length === 0 ? "noP" : "p") + "endingRequests"
                    )
                }</h1>
                <div className="pending-requests">
                    {this.renderRequests()}
>>>>>>> Implemented teacher requests
                </div>
            </Page>
        );
    }
}

export default AddTeacher;
