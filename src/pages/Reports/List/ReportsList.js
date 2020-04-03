import React, { Component } from 'react';
import './ReportsList.scss';
import Modal from 'react-animated-modal';
import { Info, Mail, ThumbsDown, ThumbsUp } from 'react-feather';
import ReportInfo from '../../../components/ReportInfo/ReportInfo';
import DifficultyLabel from '../../../components/Task/Difficulty/DifficultyLabel/DifficultyLabel';
import colorData from '../../../lib/Colors';
import TeacherIcon from '../../../components/icons/teacher.icon';

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

        const { subject } = this.props;
        const { messages } = this.props;
        const { teacher } = this.props;

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
                        <Info style={{ marginLeft: 20 }} className="info-icon" onClick={this.showModal} />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Mail />
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
                        <TeacherIcon style={{ marginLeft: 10 }} />
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
