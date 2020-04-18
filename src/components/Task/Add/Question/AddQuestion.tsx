import React from 'react';
import './AddQuestion.scss';
import { observer } from 'mobx-react';
import TextInput from '../../../Input/TextBox/TextInput';
import MultipleChoiceAnswer from '../MultipleChoiceAnswer/MultipleChoiceAnswer';

interface AddQuestionProps {
    questions: { title: string; description: string; answers: { value: string; selected: boolean }[] }[];
    setQuestions: (
        value: { title: string; description: string; answers: { value: string; selected: boolean }[] }[]
    ) => void;
    addQuestion: (value: {
        title: string;
        description: string;
        answers: { value: string; selected: boolean }[];
    }) => void;
    questionIndex: number;
}

@observer
class AddQuestion extends React.Component<AddQuestionProps> {
    constructor(props) {
        super(props);
        // add empty question
        this.props.addQuestion({ title: '', description: '', answers: [{ value: '', selected: false }] });
    }

    getQuestion = () => {
        return this.props.questions[this.props.questionIndex];
    };

    updateQuestion = (updatedQuestion) => {
        const { questions } = this.props;
        questions[this.props.questionIndex] = updatedQuestion;
        this.props.setQuestions(questions);
    };

    selectAnswerHandler = (answerIndex: number) => {
        return () => {
            const question = this.getQuestion();
            question.answers[answerIndex].selected = !question.answers[answerIndex].selected;
            this.updateQuestion(question);
        };
    };

    updateAnswerHandler = (answerIndex: number) => {
        return (answer) => {
            const question = this.getQuestion();
            question.answers[answerIndex].value = answer.target.value;
            this.updateQuestion(question);
        };
    };

    addAnswerHandler = () => {
        const question = this.getQuestion();
        question.answers.push({ value: '', selected: false });
        this.updateQuestion(question);
    };

    changeTitleHandler = (title) => {
        this.setState({ title });
        const question = this.getQuestion();
        question.title = title;
        this.updateQuestion(question);
    };

    changeDescriptionHandler = (description) => {
        const question = this.getQuestion();
        question.description = description;
        this.updateQuestion(question);
    };

    render() {
        const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const question = this.getQuestion();
        return (
            <div className="multiplechoice">
                {/* TODO translate this */}
                <TextInput placeholder="Question Title" onChange={this.changeTitleHandler} />
                <TextInput placeholder="Question Description" rows={5} onChange={this.changeDescriptionHandler} />
                <div className="answer">
                    {question.answers.map((value, index) => {
                        const name = `Answer ${letters[index]}`;
                        return (
                            <MultipleChoiceAnswer
                                placeholder={name}
                                selectHandler={this.selectAnswerHandler(index)}
                                onChangeHandler={this.updateAnswerHandler(index)}
                                key={name}
                            />
                        );
                    })}
                    {question.answers.length < letters.length ? (
                        <div onClick={this.addAnswerHandler} className="add-answer" role="button" tabIndex={0}>
                            <p style={{ margin: '0' }}>Add Answer</p>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default AddQuestion;
