import './index.scss';
import React, { Component } from 'react';

class InfoIcon extends Component {
    constructor(props) {
        super(props);
    }

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
                    className="feather feather-info">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
            </div>
        );
    }
}

export default InfoIcon;
