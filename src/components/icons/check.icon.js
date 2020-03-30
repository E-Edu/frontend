import './index.scss';
import React, { Component } from 'react';

class CheckIcon extends Component {
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-check">
                    <polyline points="20 6 9 17 4 12" />
                </svg>
            </div>
        );
    }
}

export default CheckIcon;
