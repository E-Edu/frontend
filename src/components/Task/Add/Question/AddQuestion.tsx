import React from 'react';
import './AddQuestion.scss';
import TextInput from '../../../Input/TextBox/TextInput';
import MultipleChoiceAnswer from '../MultipleChoiceAnswer/MultipleChoiceAnswer';

interface AddQuestionProps {
    questions: { selected: boolean; value: string }[];
    questionsCallback: (value: { selected: boolean; value: string }[]) => void;
}

class AddQuestion extends React.Component<AddQuestionProps> {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                {
                    name: 'Answer A',
                    selected: false,
                    value: '',
                },
                {
                    name: 'Answer B',
                    selected: false,
                    value: '',
                },
            ],
        };
    }

    addQuestion = () => {
        // @ts-ignore
        const { questions } = this.state;
        questions.push({ name: '', selected: false, value: '' });
        this.setState({ questions });
    };

    onChange = (index, value) => {
        // @ts-ignore
        const { questions } = this.state;
        questions[index].value = value;
        this.setState({ questions });
    };

    render() {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        // @ts-ignore
        const { questions } = this.state;

        return (
            <div className="multiplechoice">
                {/* TODO translate this */}
                <TextInput placeholder="Question Title" />
                <TextInput placeholder="Question Title" rows={5} />
                <div className="answer">
                    {questions.map((value, index) => {
                        return (
                            <MultipleChoiceAnswer
                                placeholder={`Answer ${letters[index]}`}
                                selectHandler={() => console.log('selected')}
                                onChangeHandler={(val) => {
                                    this.onChange(index, val.target.value);
                                }}
                            />
                        );
                    })}
                    {questions.length < letters.length ? (
                        <div onClick={this.addQuestion} className="add-answer" role="button" tabIndex={0}>
                            <p style={{ margin: '0' }}>Add Answer</p>
                        </div>
                    ) : null}
                </div>
            </div>
        );
    }
}

export default AddQuestion;
