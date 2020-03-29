import './index.scss';
import React, { Component } from 'react';

class ListIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={this.props.width || '24'}
                    height={this.props.height || '24'}
                    viewBox="0 0 24 24"
                    fill={this.props.fill || 'none'}
                    stroke={this.props.stroke || 'currentColor'}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-trending-up">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                </svg>
            </div>
        );
    }
}

export default ListIcon;
