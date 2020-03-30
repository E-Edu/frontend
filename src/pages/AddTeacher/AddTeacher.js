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
        const regex = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
        return this.state.email.match(regex) !== null;
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

    renderRequests() {
        return this.state.pendingRequests.map((request, index) => {
            return (
                <AddTeacherRequest key={index} name={request[0]} email={request[1]}/>
            );
        });
    }

    render() {
        return (
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
                </div>
            </Page>
        );
    }
}

export default AddTeacher;
