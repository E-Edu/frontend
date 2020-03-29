import React, { Component } from 'react';
import './Task.scss';

class Template extends Component {
    constructor(props) {
        super(props);
    }

    state = {};

    componentDidMount() {
        const top = document.getElementsByClassName('HeaderNavbar').clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('main').setAttribute('style', `margin-top:${top}px;margin-left:${left}px;`);
    }

    render() {
        return (
            <div>
                <div id="main"></div>
            </div>
        );
    }
}

export default Template;
