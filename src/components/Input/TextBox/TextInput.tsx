import React from 'react';
import './TextInput.scss';

interface TextInputProps {
    placeholder?: string;
    onChange?: any;
    maxWidth?: string;
    shadow?: string;
    className?: string;
}

class TextInput extends React.Component<TextInputProps> {
    render() {
        const { placeholder, onChange, maxWidth, className } = this.props;
        let { shadow } = this.props;

        const style: any = {}; //TODO Check if this is necessary

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
        return <input className={'text-box ' + className} placeholder={placeholder} onChange={onChange} style={style}/>;
    }
}

export default TextInput;
