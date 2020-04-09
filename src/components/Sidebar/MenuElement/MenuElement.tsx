import React, { ReactText } from 'react';
import './MenuElement.scss';
import { Link } from 'react-router-dom';
import icons from '../icons';

//TODO Statemanagement

interface MenuElementProps {
    active?: boolean;
    url?: string | number | boolean;
    file?: string | number | boolean;
    name?: string | number | boolean;
    key?: ReactText;
    spacer?: string | number | boolean;
}

class MenuElement extends React.Component<MenuElementProps> {
    constructor(props) {
        super(props);
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
        const { active, file, name } = this.props;
        let spacer: any;
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
        if (!active) {
            color = '#96B4DD';
        } else {
            color = '#5BC0BE';
        }
        let nameText: any;
        if (name) {
            nameText = (
                <p
                    style={{
                        margin: '0 0.8rem',
                        overflowWrap: 'break-word',
                        textAlign: 'center',
                        color,
                    }}>
                    {name}
                </p>
            );
        }

        // @ts-ignore
        const File = icons[file];
        return [
            spacer,
            <Link
                to={`/${this.props.url}`}
                className="menu-element"
                style={{ display: 'block' }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}>
                <File color={color} fill="none"/>
                {nameText}
            </Link>,
        ];
    }
}

export default MenuElement;
