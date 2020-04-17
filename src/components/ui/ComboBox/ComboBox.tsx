import React from 'react';
import './ComboBox.scss';
import { ChevronDown, ChevronUp } from 'react-feather';

interface ComboBoxState {
    isVisible: boolean;
}
interface ComboBoxProps {
    disable?: boolean;
    width?: string;
    height?: string;
    data: string[];
    value: string;
    callbackValue: (value: string) => void;
}

class ComboBox extends React.Component<ComboBoxProps, ComboBoxState> {
    constructor(props) {
        super(props);
        this.state = { isVisible: false };
    }

    setElement(index: number) {
        this.props.callbackValue(this.props.data[index]);
        this.toogle();
    }

    toogle() {
        this.setState((preState) => ({
            isVisible: !preState.isVisible,
        }));
    }

    render() {
        const getData = this.props.data.map((item, index) => {
            return (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                    style={{ width: this.props.width, height: this.props.height }}
                    key={index}
                    onClick={() => this.setElement(index)}>
                    {item}
                </li>
            );
        });

        return (
            <div>
                <input
                    className={this.state.isVisible ? 'combo-box-opened combo-box' : 'combo-box-closed combo-box'}
                    style={{ width: this.props.width, height: this.props.height }}
                    onClick={() => this.toogle()}
                    value={this.props.value}
                />
                {this.state.isVisible ? (
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
                {this.state.isVisible ? <ul>{getData}</ul> : null}
            </div>
        );
    }
}

export default ComboBox;
