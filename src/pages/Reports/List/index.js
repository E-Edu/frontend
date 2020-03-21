import React, { Component } from 'react';
import './index.scss';
import '../../../css/main.css';
import icon_info from '../../../Assets/icons/info.svg';
import icon_mail from '../../../Assets/icons/mail.svg';
import icon_teacher from '../../../Assets/icons/teacher.svg';
import icon_thumbs_up from '../../../Assets/icons/thumbs-up.svg';
import icon_thumbs_down from '../../../Assets/icons/thumbs-down.svg';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {teacher: props.teacher, likes: props.likes,
            dislikes: props.dislikes, difficulty: props.difficulty, messages: props.messages, subject: props.subject}
    }
    render() {
        let bgColor = ["rgba(25, 186, 63, 0.3)", "rgba(25, 186, 63, 1)"];
        switch (this.state.difficulty) {
            case "Mittel":
                bgColor[0] = "rgba(255, 186, 0, 0.3)"; bgColor[1] = "rgba(255, 186, 0, 1)"; break;
            case "Schwer":
                bgColor[0] = "rgba(186, 25, 25, 0.3)"; bgColor[1] = "rgba(186, 25, 25, 1)"; break;
            default: break;
        }
        return (
            <div className="report-component text-dark">
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <p style={{marginLeft: 20}}>{this.props.subject}</p>
                    <div style={{display: "flex", alignItems: "center", marginRight: 20,
                        width: 100, right: 0, justifyContent: "flex-end"}}>
                        <div style={{display: "flex", alignItems: "center", marginRight: 20,
                            width: 400, right: 0, justifyContent: "flex-end"}}>
                            <img style={{marginLeft: 10}} src={icon_thumbs_up} alt="thumps-up-icon"/>
                            <span style={{marginLeft: 10, textAlign: "right"}}>{this.props.likes}</span>
                        </div>
                        <div style={{display: "flex", alignItems: "center", marginRight: 20,
                            width: 400, right: 0, justifyContent: "flex-end"}}>
                            <img style={{marginLeft: 10}} src={icon_thumbs_down} alt="thumps-down-icon"/>
                            <span style={{marginLeft: 10, textAlign: "right"}}>{this.props.dislikes}</span>
                        </div>
                        <span style={{display: "flex", alignItems: "center", marginRight: 20, color: "#1C2541",
                            width: 400, right: 0, justifyContent: "flex-end", backgroundColor: bgColor,
                            borderWidth: 1, borderStyle: "solid", borderColor: bgColor[1], borderRadius: 10,
                            padding: "0px 5px"}}>{this.state.difficulty}</span>
                    </div>
                </div>
                <div style={{marginTop: 30, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div style={{width: 400}}>
                        <img style={{marginLeft: 20}} src={icon_info} alt="info-icon"/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={icon_mail} alt="mail-icon"/>
                        <span style={{marginLeft: 10}}>{this.props.messages}</span>
                    </div>
                    <div style={{display: "flex", alignItems: "center", marginRight: 20,
                            width: 400, right: 0, justifyContent: "flex-end"}}>
                        <span style={{marginLeft: 10, textAlign: "right"}}>{this.props.teacher}</span>
                        <img style={{marginLeft: 10}} src={icon_teacher} alt="teacher-icon"/>
                    </div>
                </div>
            </div>
        );
    }

}

class ReportsList extends Component {
    constructor(props) {
        super(props);
    }
    state = {};

    render() {
        return (
            <div>
                <h1 className="text-dark text-content">Reports</h1>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Report subject="Mathe | Grundrechnen | Plus" messages="20" teacher="Herr Lehrer Mustermann"
                            likes="3" dislikes="178" difficulty="Leicht"/>
                    <Report subject="Englisch | Grammatik | Komma" messages="100" teacher="Herr Lehrer Mustermann"
                            likes="20" dislikes="1" difficulty="Schwer"/>
                </div>
            </div>
        );
    }
}
export default ReportsList;
