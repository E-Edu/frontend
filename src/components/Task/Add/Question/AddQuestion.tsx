import React from 'react';
import './AddQuestion.scss';
import { observer } from 'mobx-react';
import { Plus } from 'react-feather';
import TextInput from '../../../Input/TextBox/TextInput';
import MultipleChoiceAnswer from '../MultipleChoiceAnswer/MultipleChoiceAnswer';
import { t } from '../../../../i18n/i18n';

interface AddQuestionProps {
    questions: { id: number; title: string; description: string; answers: { value: string; selected: boolean }[] }[];
    setQuestions: (
        value: { id: number; title: string; description: string; answers: { value: string; selected: boolean }[] }[]
    ) => void;
    addQuestion: (value: {
        id: number;
        title: string;
        description: string;
        answers: { value: string; selected: boolean }[];
    }) => void;
    questionIndex: number;
}

@observer
class AddQuestion extends React.Component<AddQuestionProps> {
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
        const { questionIndex } = this.props;
        const letters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const question = this.getQuestion();
        const indexSummand = 1;
        return (
            <div className="multiplechoice">
                <h2>
                    {t.t('component.task.add.question.question', 'Question')} {questionIndex + indexSummand}
                </h2>
                <TextInput
                    placeholder={t.t('component.task.add.question.title', 'Title of question')}
                    onChange={this.changeTitleHandler}
                    className="question-title"
                />
                <TextInput
                    placeholder={t.t('component.task.add.question.description', 'Description of question')}
                    rows={5}
                    onChange={this.changeDescriptionHandler}
                    className="question-description"
                />
                <div className="answers">
                    {question.answers.map((value, index) => {
                        const name = `${t.t('component.task.add.question.answer', 'Answer')} ${letters[index]}`;
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
                            <Plus style={{ marginRight: '0.5rem' }} />
                            <p style={{ margin: '0' }}>{t.t('component.task.add.question.addAnswer', 'Add answer')}</p>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default AddQuestion;
