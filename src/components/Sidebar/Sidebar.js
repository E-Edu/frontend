import React, { Component } from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import icons from './icons';

class MenuElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            file: props.file,
            name: props.name,
        };
    }

    setActivity(activity) {
        // the active changes the icon
        this.setState({ active: activity || this.props.active });
    }

    onMouseEnterHandler = () => {
        this.setActivity(true);
    };

    onMouseLeaveHandler = () => {
        this.setActivity(false);
    };

    render() {
        let spacer = '';
        if (this.props.spacer) {
            spacer = (
                <div
                    style={{
                        width: 60,
                        borderWidth: 2,
                        backgroundColor: '#ffffff',
                        borderRadius: 2,
                        height: 1,
                        alignSelf: 'center',
                    }}
                />
            );
        }
        let color;
        // get the right filename, if active or not
        if (!this.state.active) {
            color = '#96B4DD';
        } else {
            color = '#5BC0BE';
        }
        let nameText = '';
        if (this.state.name) {
            nameText = (
                <p
                    style={{
                        margin: '0 0.8rem',
                        overflowWrap: 'break-word',
                        textAlign: 'center',
                        color,
                    }}>
                    {this.state.name}
                </p>
            );
        }

        const File = icons[this.state.file];
        return [
            spacer,
            <Link
                to={`/${this.props.url}`}
                className="menu-element"
                key={this.state.file}
                style={{ display: 'block' }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}>
                <File color={color} fill="none" />
                {nameText}
            </Link>,
        ];
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = { activeName: props.active };
    }

    render() {
        const permission = 3; // TODO get this from user-ms
        const sites = [
            // Name, icon name, route, permission, spacer before it
            ['Home', 'home', 'dashboard', 0],
            ['Aufgaben', 'edit', 'task/lecture', 0],
            ['Neue Aufgabe', 'plus-circle', 'dashboard', 2, true],
            ['Meine Aufgaben', 'list', 'task/list', 2],
            ['Korrektur', 'check', 'correction/review', 1],
            ['Reports', 'alert-circle', 'reports/list', 3, true],
            ['Lehrer hinzufügen', 'teacher', 'teacher/add', 3],
        ];
        const sitesHtml = sites.map((site) => {
            if (permission >= site[3]) {
                return (
                    <MenuElement
                        name={site[0]}
                        file={site[1]}
                        url={site[2]}
                        active={this.state.activeName === site[2]}
                        key={site[0]}
                        spacer={site[4]}
                    />
                );
            }
            return '';
        });

        if (this.props.visible) {
            return null;
        }
        return (
            <div className="menu">
                <div className="top-icons">{sitesHtml}</div>
                <div className="bottom-icons">
                    <MenuElement
                        name=""
                        file="settings"
                        url="settings"
                        active={this.state.activeName === 'settings'}
                        spacer
                    />
                    <MenuElement name="" file="user" url="profile" active={this.state.activeName === 'profile'} />
                </div>
            </div>
        );
    }
}

export default Sidebar;
