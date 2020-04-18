import React from 'react';
import './MultipleChoiceAnswer.scss';
import TextInput from '../../../Input/TextBox/TextInput';

interface MultipleChoiceAnswerProps {
    selectHandler: any;
    onChangeHandler: any;
    selected?: boolean;
    placeholder: string;
}

class MultipleChoiceAnswer extends React.Component<MultipleChoiceAnswerProps> {
    render() {
        const { selectHandler, onChangeHandler, placeholder } = this.props;
        return (
            <div className="multiplechoice-answer">
                <input type="checkbox" onChange={selectHandler} />
                <TextInput placeholder={placeholder} onChange={onChangeHandler} />
            </div>
        );
    }
}

export default MultipleChoiceAnswer;
