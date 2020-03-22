import React, {Component} from 'react';
import './index.scss';
import icon_mail from '../../assets/icons/mail.svg';
import icon_x from '../../assets/icons/x.svg';
import icon_teacher from '../../assets/icons/teacher.svg';
import CheckIcon from '../../components/icons/check.icon';
import Header from "../../components/Header";

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
    render() {
        let pendingRequests = [["Herr Lehrer Mustermann", "lehrer.mustermann@lehrer-mail.de"],
            ["Herr Lehrer Mustermann2", "lehrer.mustermann2@lehrer-mail.de"]];
        let requestsHeadline = "ausstehende Anfragen";
        if (pendingRequests.length === 0) {
            requestsHeadline = "Keine " + requestsHeadline;
        }
        let requestsText = pendingRequests.map(request => {
            return (
                <div style={{position: "relative", marginBottom: 10, display: "flex"}}>
                    <AddRequest name={request[0]} email={request[1]}/>
                </div>
            );
        });
        return (
            <div style={{marginLeft: 200}}>
                <Header side='Dashboard'/>
                <h1 className="text-dark AddTeacherText-content">Lehrer hinzufügen</h1>
                <h1>{requestsHeadline}</h1>
                <div style={{display: "flex", flexDirection: "column"}}>
                    {requestsText}
                </div>
            </div>
        );
    }
}

export default AddTeacher;
