import React from 'react';
import './index.scss';
import {Link} from "react-router-dom";
import {button} from "@storybook/addon-knobs";

class Button extends React.Component {
    constructor(props) {
        super(props);
        for (let propsKey in this.props) {
            console.log(propsKey, this.props[propsKey]);
        }
    }

    onLeave = (e) => {
        e.target.style.backgroundColor = this.props.backgroundColor;
        e.target.style.color = this.props.FontColor;
        console.log("leave")
    };

    onEnter = (e) => {
        e.target.style.backgroundColor = this.props.hoverback;
        e.target.style.color = this.props.hovercolor;
        console.log("enter")
    };

    render() {
        let style = {
            backgroundColor: this.props.backgroundColor,
            border: "3px solid" + this.props.BorderColor,
            color: this.props.FontColor,
        };
        return(
            <button
                type={this.props.type}
                style={style}
                onMouseOver={() => {console.log("Over")}}
                onMouseLeave={this.onLeave}
                onMouseEnter={this.onEnter}
                className="button"
                >{this.props.name}</button>
            );
    }
}

export default Button;
