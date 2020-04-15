import React from 'react';
import './ComboBox.scss';

interface ButtonState {
    styleType?: string;
}

interface ButtonProps {
    disable?: boolean;
    styleType?: string;
    type?: 'button' | 'submit' | 'reset';
    name?: string;
}

class ComboBox extends React.Component<ButtonProps, ButtonState> {
    render() {

        return (
            <div>
                test
            </div>
        );
    }
}

export default ComboBox;
