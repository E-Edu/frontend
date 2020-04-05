import React, { Component } from 'react';
import './Report.scss';
import { Info, Mail, ThumbsDown, ThumbsUp } from 'react-feather';
import Modal from 'react-animated-modal';
import Teacher from '../../components/icons/teacher.icon';
import ReportInfo from '../../components/ReportInfo/ReportInfo';
import IconText from '../../components/IconText/IconText';
import DifficultyLabel from '../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';
import colorData from '../../lib/Colors';

class Report extends Component {
    nullSubtrahend = '1';

    // like: 0 - not liked, 1 - liked, 2 -disliked
    likeState = {
        unset: 0,
        liked: 1,
        disliked: 2,
    };

    constructor(props) {
        super(props);
        this.state = {
            teacher: this.props.teacher,
            likes: Number(this.props.likes),
            dislikes: Number(this.props.dislikes),
            difficulty: this.props.difficulty,
            messages: this.props.messages,
            subject: this.props.subject,
            like: this.props.liked || this.likeState.unset,
            thumbsInactive: '#3A506B',
            thumbGreen: colorData.difficultyColor.easy.border,
            thumbRed: colorData.difficultyColor.hard.border,
        };
    }

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    like = () => {
        const { likes } = this.state;
        const { dislikes } = this.state;
        const step = 1;
        if (this.state.like === this.likeState.liked) {
            this.setState({ like: this.likeState.unset, likes: likes - this.nullSubtrahend });
        } else {
            if (this.state.like === this.likeState.disliked) {
                this.setState({ dislikes: dislikes - this.nullSubtrahend });
            }
            this.setState({ like: this.likeState.liked, likes: likes + step });
        }
    };

    dislike = () => {
        const { likes } = this.state;
        const { dislikes } = this.state;
        const step = 1;
        if (this.state.like === this.likeState.disliked) {
            this.setState({ like: this.likeState.unset, dislikes: dislikes - this.nullSubtrahend });
        } else {
            if (this.state.like === this.likeState.liked) {
                this.setState({ likes: likes - this.nullSubtrahend });
            }
            this.setState({ like: this.likeState.disliked, dislikes: dislikes + step });
        }
    };

    showModal = () => {
        if (!this.state.showModal) {
            this.setState({ showModal: true });
        }
    };

    handleKeyPress = (event) => {
        const keyCode = 27;
        if (event.keyCode === keyCode) {
            this.setState({ showModal: false });
        }
    };

    render() {
        const { difficulty } = this.state;
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
                            <div
                                style={{ marginLeft: 10, outline: 'none' }}
                                onClick={this.like}
                                role="button"
                                tabIndex="0">
                                <ThumbsUp
                                    color={
                                        this.state.like === this.likeState.liked
                                            ? this.state.thumbGreen
                                            : this.state.thumbsInactive
                                    }
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
                            <div
                                style={{ marginLeft: 10, outline: 'none' }}
                                onClick={this.dislike}
                                role="button"
                                tabIndex="0">
                                <ThumbsDown
                                    color={
                                        this.state.like === this.likeState.disliked
                                            ? this.state.thumbRed
                                            : this.state.thumbsInactive
                                    }
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
