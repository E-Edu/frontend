import React, { Component } from 'react';
import './Report.scss';
import { Info, Mail, ThumbsUp, ThumbsDown } from 'react-feather';
import Modal from 'react-animated-modal';
import Teacher from '../../components/icons/teacher.icon';
import ReportInfo from '../../components/ReportInfo/ReportInfo';
import IconText from '../../components/IconText/IconText';
import DifficultyLabel from '../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';
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
        const { difficulty } = this.state;
        const color = colorData.difficultyColor[difficulty];
        const { backgroundColor } = color;
        const { borderColor } = color;
        const { subject, messages, teacher } = this.props;

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
                                <ThumbsUp
                                    color={this.state.like === 1 ? this.state.thumbGreen : this.state.thumbsInactive}
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
                                <ThumbsDown
                                    color={this.state.like === 2 ? this.state.thumbRed : this.state.thumbsInactive}
                                />
                            </div>
                            <span style={{ marginLeft: 10, textAlign: 'right' }}>{this.state.dislikes}</span>
                        </div>
                        <DifficultyLabel difficulty={difficulty} />
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
                        <Info color="#3a506b" />
                    </span>
                    <IconText text={messages} distance="0.8rem" position="left" class="messages-count">
                        <Mail color="#3a506b" />
                    </IconText>
                    <IconText text={teacher} distance="0.8rem" class="teacher-name">
                        {/* TODO: finde a better solution */}
                        <Teacher color="#3a506b" fill="none" />
                    </IconText>
                </div>
            </div>
        );
    }
}

export default Report;
