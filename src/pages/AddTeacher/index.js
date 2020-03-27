import React, {Component} from 'react';
import './index.scss';
import icon_mail from '../../assets/icons/mail.svg';
import icon_x from '../../assets/icons/x.svg';
import icon_teacher from '../../assets/icons/teacher.svg';
import icon_user_plus from '../../assets/icons/user-plus.svg';
import CheckIcon from '../../components/icons/check.icon';

class AddRequest extends Component {
    render() {
        return (
            <div className="AddTeacherReport-component text-dark">
                <div style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    marginTop: 10,
                }}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={icon_teacher} alt="teacher-icon"/>
                        <span style={{marginLeft: 10}}>{this.props.name}</span>
                    </div>
                    <div className="clickable" style={{
                        display: "flex", alignItems: "center", marginRight: 20,
                        width: 100, right: 0, justifyContent: "flex-end"
                    }}>
                        <span>Ablehnen</span>
                        <img style={{marginLeft: 20}} src={icon_x} alt="x-icon"/>
                    </div>
                </div>
                <div style={{marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={icon_mail} alt="mail-icon"/>
                        <span style={{marginLeft: 10}}>{this.props.email}</span>
                    </div>
                    <div className="clickable" style={{
                        display: "flex", alignItems: "center", marginRight: 20,
                        width: 100, right: 0, justifyContent: "flex-end"
                    }}>
                        <span style={{marginRight: 20}}>Annehmen</span>
                        <CheckIcon stroke="#19BA3F"/>
                    </div>
                </div>
            </div>
        );
    }

}

class AddTeacher extends Component {
    constructor(props) {
        super(props);
        this.state = {valid: ""}
    }

    isValidEmail() {
        const regex = "(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])";
        let email = document.getElementById("teacherEmail").value;
        return email.match(regex) !== null;
    }

    emailChange = () => {
        if (this.isValidEmail()) {
            this.setState({valid: ""});
        } else {
            this.setState({valid: "AddTeacherInvalid"});
        }
    };

    add = () => {
        if (this.isValidEmail()) {
            alert("Teacher added");
            document.getElementById("teacherEmail").value = "";
        } else {
            this.setState({valid: "AddTeacherInvalid"});
        }

    };

    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        let pendingRequests = [["Herr Lehrer Mustermann", "lehrer.mustermann@lehrer-mail.de"],
            ["Herr Lehrer Mustermann2", "lehrer.mustermann2@lehrer-mail.de"]];
        let requestsHeadline = "ausstehende Anfragen";
        if (pendingRequests.length === 0) {
            requestsHeadline = "Keine " + requestsHeadline;
        }
        let requestsText = pendingRequests.map(request => {
            return (
                <div style={{position: "relative", marginBottom: 10, display: "flex"}} key={request[0]}>
                    <AddRequest name={request[0]} email={request[1]}/>
                </div>
            );
        });
        return (
            <div>
                <div id="main">
                    <div style={{marginLeft: 50}}>
                        <h1 className="text-dark AddTeacherText-content">Lehrer hinzufügen</h1>
                        <div style={{display: "flex"}}>
                            <input type="text" id="teacherEmail" placeholder="Email des Lehrers" style={{padding: 5}}
                                   className={this.state.valid} onChange={this.emailChange}/>
                            <img src={icon_user_plus} alt="user-plus-icon" style={{
                                border: "solid", borderWidth: 2,
                                borderRadius: 8, marginLeft: 20, padding: 5, borderColor: "#1c2541"
                            }}
                                 onClick={this.add}/>
                        </div>
                        <h1>{requestsHeadline}</h1>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        {requestsText}
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTeacher;
