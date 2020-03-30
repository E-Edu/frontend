import './index.scss';
import React, { Component } from 'react';

class UserIcon extends Component {
    render(props) {
        return (
            <div className="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={this.props.width || 24}
                    height={this.props.height || 24}
                    fill={this.props.fill || 'none'}
                    stroke={this.props.stroke || 'currentColor'}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-users">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            </div>
        );
    }
}

export default UserIcon;
