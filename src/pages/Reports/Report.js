import React, { Component } from 'react';
import './Report.scss';
import icon_info from '../../assets/icons/info.svg';
import InfoIcon from '../../components/icons/info.icon';
import MailIcon from '../../components/icons/mail.icon';
import TeacherIcon from '../../components/icons/teacher.icon';
import ThumbsUpIcon from '../../components/icons/thumbs-up.icon';
import ThumbsDownIcon from '../../components/icons/thumbs-down.icon';
import ReportInfo from '../../components/ReportInfo/ReportInfo';
import IconText from '../../components/IconText/IconText';
import Modal from 'react-animated-modal';
import colorData from '../../lib/Colors';
import { Translation } from '../../i18n/i18n';

class Report extends Component {
    constructor(props) {
        super(props);
    }

    // like: 0 - not liked, 1 - liked, 2 -disliked
    state = {
        teacher: this.props.teacher,
        likes: Number(this.props.likes),
        dislikes: Number(this.props.dislikes),
        difficulty: this.props.difficulty,
        messages: this.props.messages,
        subject: this.props.subject,
        like: this.props.liked || 0,
        thumbsInactive: '#3A506B',
        thumbGreen: colorData.difficultyColor['easy'].border,
        thumbRed: colorData.difficultyColor['hard'].border,
    };

    like = () => {
        let likes = this.state.likes;
        let dislikes = this.state.dislikes;
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
        let likes = this.state.likes;
        let dislikes = this.state.dislikes;
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
        const difficulty = this.state.difficulty;
        const color = colorData.difficultyColor[difficulty];
        const backgroundColor = color.backgroundColor;
        const borderColor = color.borderColor;
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
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: 20,
                                color: '#1C2541',
                                right: 0,
                                justifyContent: 'flex-end',
                                backgroundColor: backgroundColor,
                                borderWidth: 1,
                                borderStyle: 'solid',
                                borderColor: borderColor,
                                borderRadius: 10,
                                padding: '0.0rem 0.33333334rem',
                            }}>
                            {Translation.t('difficulty.' + difficulty)}
                        </span>
                    </div>
                </div>
                <div
                    style={{
                        marginTop: 30,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                    <span style={{ marginLeft: 20, width: 400 }}>
                        <InfoIcon stroke="#3a506b" />
                    </span>
                    <IconText text={messages} distance="0.8rem" position="left" class="messages-count">
                        <MailIcon stroke="#3a506b" />
                    </IconText>
                    <IconText text={teacher} distance="0.8rem" class="teacher-name">
                        {/*TODO: finde a better solution*/}
                        <TeacherIcon stroke="none" fill="#3a506b" />
                    </IconText>
                </div>
            </div>
        );
    }
}

export default Report;
