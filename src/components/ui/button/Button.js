import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';
import { button } from '@storybook/addon-knobs';

class Button extends React.Component {

    render() {
        let classes = this.props.styleType || 'Primary';
        if (this.props.disable) {
            classes = classes + ' disabled';
        }
        return (
            <button
                type={this.props.type || 'text'}
                className={'button ' + classes}
                disabled={this.props.disable || false}>
                {this.props.name || 'Default'}
            </button>
        );
    }
}

export default Button;
