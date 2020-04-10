import React, { Component } from 'react';
import './MenuElement.scss';
import { Link } from 'react-router-dom';
import icons from '../icons';

class MenuElement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: props.active,
            file: props.file,
            name: props.name,
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (state.active !== props.active) {
            return {
                active: props.active,
            };
        }
        return null;
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

export default MenuElement;
