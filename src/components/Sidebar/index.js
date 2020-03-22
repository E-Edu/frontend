import React, {Component} from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
import icons from './icons';

class MenuElement extends Component {
    constructor(props) {
        super(props);
        this.state = {active: props.active, file: props.file, name: props.name};
    }

    setActivity(activity) {
        // the active changes the icon
        this.setState({active: activity || this.props.active});
    }

    onMouseEnterHandler = () => {
        this.setActivity(true);
    };

    onMouseLeaveHandler = () => {
        this.setActivity(false);
    };

    render() {
        let ending;
        // get the right filename, if active or not
        if (!this.state.active) {
            ending = '.svg';
        } else {
            ending = '-active.svg';
        }
        let nameText = '';
        if (this.state.name) {
            nameText = <span style={{width: '80%', overflowWrap:'break-word'}}>{this.state.name}</span>;
        }
        const file = icons[this.state.file + ending];

        return (
            <Link
                to={'/' + this.props.url}
                className='menuElement'
                key={this.state.file}
                style={{display: 'block'}}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >
                <img className="iconSize" src={file} alt=''/>
                <br/>
                {nameText}
            </Link>
        );
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {activeName: props.active};
    }

    render() {
        const sites = [
            //TODO edit the addresses of pages
            ['Home', 'home', 'dashboard'],
            ['Aufgaben', 'edit', 'dashboard'],
            ['Neue Aufgabe', 'plus-circle', 'dashboard'],
            ['Meine Aufgaben', 'list', 'dashboard'],
            ['Korrektur', 'check', 'dashboard'],
            ['Reports', 'alert-circle', 'dashboard'],
            ['Lehrer hinzufügen', 'user', 'dashboard'],
        ];
        let sitesHtml = sites.map(site => {
            let active = false;
            if (this.state.activeName === site[1]) {
                active = true;
            }
            return <MenuElement name={site[0]} file={site[1]} url={site[2]} active={active}/>;
        });
        return (
            <div id='Menu'>
                <div className="topIcons">
                    {sitesHtml}
                </div>
                <div className="bottomIcons">
                    <MenuElement name="" file="settings" url="dashboard" active={false}/>
                    <MenuElement name="" file="user" url="dashboard" active={false}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
