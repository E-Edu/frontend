import './index.scss';
import React, { Component } from 'react';

class ThumbsUpIcon extends Component {
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
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={this.props.fill || 'none'}
                    stroke={this.props.stroke || 'currentColor'}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-thumbs-down">
                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                </svg>
            </div>
        );
    }
}

export default ThumbsUpIcon;
