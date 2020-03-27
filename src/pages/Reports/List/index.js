import React, { Component } from 'react';
import './index.scss';
import icon_info from '../../../assets/icons/info.svg';
import icon_mail from '../../../assets/icons/mail.svg';
import icon_teacher from '../../../assets/icons/teacher.svg';
import ThumbsUpIcon from '../../../components/icons/thumbs-up.icon';
import ThumbsDownIcon from '../../../components/icons/thumbs-down.icon';
import Header from '../../../components/Header';
import ReportInfo from '../../../components/ReportInfo';
import Modal from 'react-animated-modal';
import Sidebar from '../../../components/Sidebar';
import colorData from '../../../lib/Color_Config';


class Report extends Component {
    constructor(props) {
        super(props);
        // like: 0 - not liked, 1 - liked, 2 -disliked
        this.state = {
            teacher: props.teacher, likes: Number(props.likes), dislikes: Number(props.dislikes),
            difficulty: props.difficulty, messages: props.messages, subject: props.subject, like: (props.liked || 0),
            thumbsInactive: "#3A506B", thumbGreen: colorData.Difficulty_color["Leicht"].border,
            thumbRed: colorData.Difficulty_color["Schwer"].border
        }
    }

    like = () => {
        let likes = this.state.likes;
        let dislikes = this.state.dislikes;
        if (this.state.like === 1) {
            this.setState({like: 0, likes: likes-1});
        }
        else {
            if (this.state.like === 2) {
                this.setState({dislikes: dislikes-1});
            }
            this.setState({like: 1, likes: likes+1});
        }
    };

    dislike = () => {
        let likes = this.state.likes;
        let dislikes = this.state.dislikes;
        if (this.state.like === 2) {
            this.setState({like: 0, dislikes: dislikes-1});
        }
        else {
            if (this.state.like === 1) {
                this.setState({likes: likes-1});
            }
            this.setState({like: 2, dislikes: dislikes+1});
        }
    };

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
        const color = colorData.Difficulty_color[this.state.difficulty];
        let bgColor = [color.bg, color.border];
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
                            <div style={{marginLeft: 10}} onClick={this.like}>
                                <ThumbsUpIcon stroke={this.state.like === 1 ?
                                  this.state.thumbGreen : this.state.thumbsInactive} />
                            </div>
                            <span style={{marginLeft: 10, textAlign: "right"}}>{this.state.likes}</span>
                        </div>
                        <div style={{
                            display: "flex", alignItems: "center", marginRight: 20,
                            width: 400, right: 0, justifyContent: "flex-end"
                        }}>
                            <div style={{marginLeft: 10}} onClick={this.dislike}>
                                <ThumbsDownIcon stroke={this.state.like === 2 ?
                                  this.state.thumbRed : this.state.thumbsInactive} />
                            </div>
                            <span style={{marginLeft: 10, textAlign: "right"}}>{this.state.dislikes}</span>
                        </div>
                        <span style={{
                            display: "flex", alignItems: "center", marginRight: 20, color: "#1C2541",
                            right: 0, justifyContent: "flex-end", backgroundColor: bgColor[0],
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
                    <div style={{display: "flex", flexDirection: "column", justifyContent: "center",
                        alignItems: "center"}}>
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
