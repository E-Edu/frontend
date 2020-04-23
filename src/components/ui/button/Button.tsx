import React from 'react';
import './Button.scss';
import { button } from '@storybook/addon-knobs';

interface ButtonState {
    styleType?: string;
}

interface ButtonProps {
    disable?: boolean;
    className?: string;
    styleType?: string;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
    width?: string;
    height?: string;
    fontSize?: string;
    onClick?: any;
}

class Button extends React.Component<ButtonProps, ButtonState> {
    render() {
        const { width, height, fontSize, className, onClick } = this.props;
        let classes = this.props.styleType || 'Primary';
        if (this.props.disable) {
            classes += ' disabled';
        }
        return (
            // eslint bug with props
            // eslint-disable-next-line react/button-has-type
            <button
                type={this.props.type}
                className={`button ${classes} ${className}`}
                disabled={this.props.disable || false}
                style={{ width, height, fontSize }}
                onClick={onClick}>
                {this.props.name || 'Default'}
            </button>
        );
    }
}

export default Button;
