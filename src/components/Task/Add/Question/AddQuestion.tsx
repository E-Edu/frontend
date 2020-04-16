import React from 'react';
import './AddQuestion.scss';
import TextInput from '../../../Input/TextBox/TextInput';
import MultipleChoiceAnswer from '../MultipleChoiceAnswer/MultipleChoiceAnswer';

class AddQuestion extends React.Component {
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
                    <div onClick={this.addQuestion} className="add-answer">
                        <p style={{ margin: '0' }}>Add Answer</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddQuestion;
