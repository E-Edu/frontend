import "./index.scss";
import React, { Component } from "react";

class UserIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: ""
    };

    render(props) {
        return (
            <div className="icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={this.props.width || 24}
                    height={this.props.height || 24}
                    viewBox="0 0 24 24"
                    fill={this.props.fill || "none"}
                    stroke={this.props.stroke || "currentColor"}
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-users"
                >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
            </div>
        );
    }
}

export default UserIcon;
