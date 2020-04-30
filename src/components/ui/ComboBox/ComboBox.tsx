import React from 'react';
import './ComboBox.scss';
import { ChevronDown, ChevronUp } from 'react-feather';
import { observer } from 'mobx-react';
import TextInput from '../../Input/TextBox/TextInput';

interface ComboBoxState {
    isVisible: boolean;
    typing?: string;
    valid: boolean;
}

interface ComboBoxProps {
    disable?: boolean;
    width?: string;
    height?: string;
    className?: string;
    placeholder: string;
    data: string[];
    callbackValue: (value: string) => void;
    typingEnabled?: boolean;
    value: string;
}

@observer
class ComboBox extends React.Component<ComboBoxProps, ComboBoxState> {
    constructor(props) {
        super(props);
        this.state = { isVisible: false, typing: null, valid: true };
    }

    onTypingHandler(e) {
        const { data } = this.props;
        let typing = e.target.value;
        let found = false;
        let isVisible = true;
        data.forEach((name, index) => {
            if (typing !== null) {
                if (name.toLowerCase() === typing.toLowerCase()) {
                    isVisible = false;
                    found = true;
                    typing = null;
                    this.setElement(index);
                } else if (name.toLowerCase().includes(typing.toLowerCase())) {
                    found = true;
                }
            }
        });
        this.setState({ valid: found });
        this.setState({ typing });
        this.setState({ isVisible });
    }

    setElement(index: number) {
        this.setState({ typing: null });
        this.props.callbackValue(this.props.data[index]);
        this.setState({ valid: true });
        this.toogle();
    }

    toogle() {
        const { typing } = this.state;
        if (typing === null) {
            this.setState({ typing: '' });
        }
        this.setState((preState) => ({
            isVisible: !preState.isVisible,
        }));
    }

    render() {
        const { width, height, data, className, typingEnabled, placeholder, value } = this.props;
        const { isVisible, typing } = this.state;
        const { valid } = this.state;

        const getData = data.map((item, index) => {
            return !valid || (typing !== null && item.toLowerCase().includes(typing.toLowerCase())) ? (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li style={{ height }} key={item} onClick={() => this.setElement(index)}>
                    {item}
                </li>
            ) : null;
        });
        return (
            <div className={`combo-box ${className}`}>
                <TextInput
                    className={`box-input ${this.state.isVisible ? 'opened' : 'closed'} ${
                        this.state.valid ? 'box-valid' : 'box-invalid'
                    }`}
                    style={{ width, height }}
                    onChange={(e) => this.onTypingHandler(e)}
                    onClick={() => this.toogle()}
                    value={typing === null ? value : typing}
                    disabled={!typingEnabled}
                    placeholder={placeholder}
                />
                {isVisible ? (
                    <ChevronUp
                        className="chevron"
                        onClick={() => this.toogle()}
                        role="button"
                        tabIndex={0}
                        color="#5BC0BE"
                    />
                ) : (
                    <ChevronDown
                        className="chevron"
                        onClick={() => this.toogle()}
                        role="button"
                        tabIndex={0}
                        color="#5BC0BE"
                    />
                )}
                {isVisible ? <ul style={{ width }}>{getData}</ul> : null}
            </div>
        );
    }
}

export default ComboBox;
