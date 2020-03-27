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
            <input className="input text" type="text"/>
        );
    }
}

export default UserIcon;
