import React from 'react';
import './MenuElement.scss';
import { Link } from 'react-router-dom';
import icons from '../icons';

// TODO Statemanagement

interface MenuElementProps {
    active?: boolean;
    url?: string;
    file?: string;
    name?: string;
    spacer?: boolean;
    keyProp?: string;
}

class MenuElement extends React.Component<MenuElementProps> {
    /*    static getDerivedStateFromProps(props, state) {
        if (state.active !== props.active) {
            return {
                active: props.active,
            };
        }
        return null;
    } */

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
        const { active, file, name, keyProp, url, spacer } = this.props;
        let spacerElement: any;
        if (spacer) {
            spacerElement = (
                <div
                    style={{
                        alignSelf: 'center',
                        backgroundColor: '#ffffff',
                        borderRadius: 2,
                        borderWidth: 2,
                        height: 1,
                        width: 60,
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
                        color,
                        margin: '0 0.8rem',
                        overflowWrap: 'break-word',
                        textAlign: 'center',
                    }}>
                    {name}
                </p>
            );
        }

        // @ts-ignore
        const File = icons[file];
        return [
            spacerElement,
            <Link
                to={`/${url}`}
                className="menu-element"
                key={keyProp}
                style={{ display: 'block' }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}>
                <File color={color} fill="none" key={keyProp} />
                {nameText}
            </Link>,
        ];
    }
}

export default MenuElement;
