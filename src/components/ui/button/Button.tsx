import React from 'react';
import './Button.scss';
import { button } from '@storybook/addon-knobs';

interface ButtonState {
    styleType?: string;
}

interface ButtonProps {
    disable?: boolean;
    styleType?: string;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
}

class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        let classes = this.props.styleType || 'Primary';
        if (this.props.disable) {
            classes += ' disabled';
        }
        return (
            // eslint bug with props
            // eslint-disable-next-line
            <button type={this.props.type} className={`button ${classes}`} disabled={this.props.disable || false}>
                {this.props.name || 'Default'}
            </button>
        );
    }
}

export default Button;
