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
        const { width, height, fontSize, className, onClick, disable, name, type } = this.props;
        let classes = this.props.styleType || 'Primary';
        if (disable) {
            classes += ' disabled';
        }
        return (
            // eslint bug with props
            // eslint-disable-next-line react/button-has-type
            <button
                type={type}
                className={`button ${classes} ${className}`}
                disabled={disable || false}
                onClick={onClick}
                style={{ width, height, fontSize }}>
                {name || 'Default'}
            </button>
        );
    }
}

export default Button;
