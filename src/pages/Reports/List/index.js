import React, {Component} from 'react';
import './index.scss';
import icon_info from '../../../assets/icons/info.svg';
import icon_mail from '../../../assets/icons/mail.svg';
import icon_teacher from '../../../assets/icons/teacher.svg';
import icon_thumbs_up from '../../../assets/icons/thumbs-up.svg';
import icon_thumbs_down from '../../../assets/icons/thumbs-down.svg';
import Header from "../../../components/Header";
import ReportInfo from "../../../components/ReportInfo";
import Modal from 'react-animated-modal';
import Sidebar from "../../../components/Sidebar";

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teacher: props.teacher, likes: props.likes,
            dislikes: props.dislikes, difficulty: props.difficulty, messages: props.messages, subject: props.subject
        }
    }

    showModal = () => {
        if (!this.state.showModal) {
            this.setState({showModal: true})
        }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = (event) => {
        if (event.keyCode === 27) {
            this.setState({showModal: false})
        }
    };

    render() {
        let bgColor = ["rgba(25, 186, 63, 0.3)", "rgba(25, 186, 63, 1)"];
        switch (this.state.difficulty) {
            case "Mittel":
                bgColor[0] = "rgba(255, 186, 0, 0.3)";
                bgColor[1] = "rgba(255, 186, 0, 1)";
                break;
            case "Schwer":
                bgColor[0] = "rgba(186, 25, 25, 0.3)";
                bgColor[1] = "rgba(186, 25, 25, 1)";
                break;
            default:
                break;
        }
        return (
            <div className="report-component text-dark">
                <Modal visible={this.state.showModal}
                       closemodal={() => {
                           this.setState({showModal: false});
                       }}
                       type="fadeIn">
                    <ReportInfo/>
                </Modal>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <p style={{marginLeft: 20}}>{this.props.subject}</p>
                    <div style={{
                        display: "flex", alignItems: "center", marginRight: 20,
                        width: 100, right: 0, justifyContent: "flex-end"
                    }}>
                        <div style={{
                            display: "flex", alignItems: "center", marginRight: 20,
                            width: 400, right: 0, justifyContent: "flex-end"
                        }}>
                            <img style={{marginLeft: 10}} src={icon_thumbs_up} alt="thumps-up-icon"/>
                            <span style={{marginLeft: 10, textAlign: "right"}}>{this.props.likes}</span>
                        </div>
                        <div style={{
                            display: "flex", alignItems: "center", marginRight: 20,
                            width: 400, right: 0, justifyContent: "flex-end"
                        }}>
                            <img style={{marginLeft: 10}} src={icon_thumbs_down} alt="thumps-down-icon"/>
                            <span style={{marginLeft: 10, textAlign: "right"}}>{this.props.dislikes}</span>
                        </div>
                        <span style={{
                            display: "flex", alignItems: "center", marginRight: 20, color: "#1C2541",
                            right: 0, justifyContent: "flex-end", backgroundColor: bgColor,
                            borderWidth: 1, borderStyle: "solid", borderColor: bgColor[1], borderRadius: 10,
                            padding: "0.0rem 0.33333334rem"
                        }}>{this.state.difficulty}</span>
                    </div>
                </div>
                <div style={{marginTop: 30, display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                    <div style={{width: 400}}>
                        <img style={{marginLeft: 20}} src={icon_info} alt="info-icon" className="InfoIcon"
                             onClick={this.showModal}/>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <img src={icon_mail} alt="mail-icon"/>
                        <span style={{marginLeft: 10}}>{this.props.messages}</span>
                    </div>
                    <div style={{
                        display: "flex", alignItems: "center", marginRight: 20,
                        width: 400, right: 0, justifyContent: "flex-end"
                    }}>
                        <span style={{marginLeft: 10, textAlign: "right"}}>{this.props.teacher}</span>
                        <img style={{marginLeft: 10}} src={icon_teacher} alt="teacher-icon"/>
                    </div>
                </div>
            </div>
        );
    }

}

class ReportsList extends Component {
    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div>
                <Header side='Dashboard'/>
                <Sidebar active="reports/list"/>
                <div id="main">
                    <h1 className="text-dark ReportText-content">Reports</h1>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <Report subject="Mathe | Grundrechnen | Plus" messages="20" teacher="Herr Lehrer Mustermann"
                                likes="3" dislikes="178" difficulty="Leicht"/>
                        <Report subject="Englisch | Grammatik | Komma" messages="100" teacher="Herr Lehrer Mustermann"
                                likes="20" dislikes="1" difficulty="Schwer"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportsList;
