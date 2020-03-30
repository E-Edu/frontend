import React, { Component } from 'react';
import './ReportsList.scss';
import Modal from 'react-animated-modal';
import icon_info from '../../../assets/icons/info.svg';
import icon_mail from '../../../assets/icons/mail.svg';
import icon_teacher from '../../../assets/icons/teacher.svg';
import ThumbsUpIcon from '../../../components/icons/thumbs-up.icon';
import ThumbsDownIcon from '../../../components/icons/thumbs-down.icon';
import ReportInfo from '../../../components/ReportInfo/ReportInfo';
import Modal from 'react-animated-modal';
import colorData from '../../../lib/Colors';

class Report extends Component {
    // like: 0 - not liked, 1 - liked, 2 -disliked
    state = {
        teacher: this.props.teacher,
        likes: Number(this.props.likes),
        dislikes: Number(this.props.dislikes),
        messages: this.props.messages,
        subject: this.props.subject,
        like: this.props.liked || 0,
        thumbsInactive: '#3A506B',
        thumbGreen: colorData.difficultyColor.easy.border,
        thumbRed: colorData.difficultyColor.hard.border,
    };

    like = () => {
        const { likes } = this.state;
        const { dislikes } = this.state;
        if (this.state.like === 1) {
            this.setState({ like: 0, likes: likes - 1 });
        } else {
            if (this.state.like === 2) {
                this.setState({ dislikes: dislikes - 1 });
            }
            this.setState({ like: 1, likes: likes + 1 });
        }
    };

    dislike = () => {
        const { likes } = this.state;
        const { dislikes } = this.state;
        if (this.state.like === 2) {
            this.setState({ like: 0, dislikes: dislikes - 1 });
        } else {
            if (this.state.like === 1) {
                this.setState({ likes: likes - 1 });
            }
            this.setState({ like: 2, dislikes: dislikes + 1 });
        }
    };

    showModal = () => {
        if (!this.state.showModal) {
            this.setState({ showModal: true });
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
            this.setState({ showModal: false });
        }
    };

    render() {
        const subject = this.props.subject;
        const messages = this.props.messages;
        const teacher = this.props.teacher;

        return (
            <div className="report-component text-dark">
                <Modal
                    visible={this.state.showModal}
                    closemodal={() => {
                        this.setState({ showModal: false });
                    }}
                    type="fadeIn">
                    <ReportInfo />
                </Modal>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <p style={{ marginLeft: 20 }}>{subject}</p>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 20,
                            width: 100,
                            right: 0,
                            justifyContent: 'flex-end',
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: 20,
                                width: 400,
                                right: 0,
                                justifyContent: 'flex-end',
                            }}>
                            <div style={{ marginLeft: 10 }} onClick={this.like}>
                                <ThumbsUpIcon
                                    stroke={this.state.like === 1 ? this.state.thumbGreen : this.state.thumbsInactive}
                                />
                            </div>
                            <span style={{ marginLeft: 10, textAlign: 'right' }}>{this.state.likes}</span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: 20,
                                width: 400,
                                right: 0,
                                justifyContent: 'flex-end',
                            }}>
                            <div style={{ marginLeft: 10 }} onClick={this.dislike}>
                                <ThumbsDownIcon
                                    stroke={this.state.like === 2 ? this.state.thumbRed : this.state.thumbsInactive}
                                />
                            </div>
                            <span style={{ marginLeft: 10, textAlign: 'right' }}>{this.state.dislikes}</span>
                        </div>
                        <DifficultyLabel difficulty={this.props.difficulty} />
                    </div>
                </div>
                <div
                    style={{
                        marginTop: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <div style={{ width: 400 }}>
                        <img
                            style={{ marginLeft: 20 }}
                            src={icon_info}
                            alt="info-icon"
                            className="info-icon"
                            onClick={this.showModal}
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={icon_mail} alt="mail-icon" />
                        <span style={{ marginLeft: 10 }}>{messages}</span>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginRight: 20,
                            width: 400,
                            right: 0,
                            justifyContent: 'flex-end',
                        }}>
                        <span style={{ marginLeft: 10, textAlign: 'right' }}>{teacher}</span>
                        <img style={{ marginLeft: 10 }} src={icon_teacher} alt="teacher-icon" />
                    </div>
                </div>
            </div>
        );
    }
}

class ReportsList extends Component {
    render() {
        return (
            <div>
                <div id="main">
                    <h1 className="text-dark report-text-content">Reports</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Report
                            subject="Mathe | Grundrechnen | Plus"
                            messages="20"
                            teacher="Herr Lehrer Mustermann"
                            likes="3"
                            dislikes="178"
                            difficulty="easy"
                        />
                        <Report
                            subject="Englisch | Grammatik | Komma"
                            messages="100"
                            teacher="Herr Lehrer Mustermann"
                            likes="20"
                            dislikes="1"
                            difficulty="hard"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportsList;
