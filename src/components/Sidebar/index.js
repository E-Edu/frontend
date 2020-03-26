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

        let color;
        // get the right filename, if active or not
        if (!this.state.active) {
            color = '#96B4DD';
        } else {
            color = '#5BC0BE';
        }
        let nameText = '';
        if (this.state.name) {
            nameText = <p style={{margin: '0 0.8rem', overflowWrap: 'break-word', textAlign: 'center', color: color}}>{this.state.name}</p>;
        }

        const File = icons[this.state.file];
        return (
            <Link
                to={'/' + this.props.url}
                className='menuElement'
                key={this.state.file}
                style={{display: 'block'}}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}
            >

                <File stroke={color}/>
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
            ['Home', 'home', 'dashboard'],
            ['Aufgaben', 'edit', 'task'],
            ['Neue Aufgabe', 'plus-circle', 'dashboard'],
            ['Meine Aufgaben', 'list', 'task/list'],
            ['Korrektur', 'check', 'correction/review'],
            ['Reports', 'alert-circle', 'reports/list'],
            ['Lehrer hinzufügen', 'teacher', 'teacher/add'],
        ];
        let sitesHtml = sites.map(site => {
            return <MenuElement name={site[0]} file={site[1]} url={site[2]} active={this.state.activeName === site[2]} key={site[0]}/>;
        });
        return (
            <div id='Menu'>
                <div className="topIcons">
                    {sitesHtml}
                </div>
                <div className="bottomIcons">
                    <MenuElement name="" file="settings" url="settings" active={this.state.activeName === 'settings'}/>
                    <MenuElement name="" file="user" url="profile" active={this.state.activeName === 'profile'}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
