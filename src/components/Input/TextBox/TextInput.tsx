import React from 'react';
import './TextInput.scss';

interface TextInputProps {
    placeholder?: string;
    onChange?: any;
    maxWidth?: string;
    shadow?: string;
    className?: string;
    rows?: number;
    type?: 'password';
    style?: React.CSSProperties;
    onClick?: any;
    value?: string;
    disabled?: boolean;
    pattern?: string;
}

class TextInput extends React.Component<TextInputProps> {
    render() {
        const {
            placeholder,
            onChange,
            maxWidth,
            className,
            rows,
            type,
            onClick,
            value,
            disabled,
            pattern,
        } = this.props;
        let { shadow } = this.props;

        const { style } = this.props;
        if (maxWidth) style.maxWidth = maxWidth;
        if (shadow !== undefined) {
            switch (shadow) {
                case 'red': {
                    shadow = 'inset 0 0 0.33rem 0 rgba(255, 0, 0, 1)';
                    break;
                }
                default: {
                    shadow = null;
                    break;
                }
            }
            if (shadow) style.boxShadow = shadow;
        }
        const minNumberOfRows = 0;
        if (rows && rows > minNumberOfRows) {
            return (
                <textarea
                    className={`text-box ${className}`}
                    style={style}
                    placeholder={placeholder}
                    onChange={onChange}
                    rows={rows}
                />
            );
        }
        return (
            <input
                className={`text-box ${className}`}
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}
                style={style}
                type={type}
                value={value}
                disabled={disabled}
                pattern={pattern}
            />
        );
    }
}

export default TextInput;
