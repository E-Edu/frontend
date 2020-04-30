import React from 'react';
import './MenuElement.scss';
import { Link } from 'react-router-dom';
import icons from '../icons';

interface MenuElementProps {
    active?: boolean;
    url?: string;
    file?: string;
    name?: string;
}

class MenuElement extends React.Component<MenuElementProps> {
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
        const { active, file, name, url } = this.props;
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

        const File = icons[file];
        return (
            <Link
                to={`/${url}`}
                className="menu-element"
                style={{ display: 'block' }}
                onMouseEnter={this.onMouseEnterHandler}
                onMouseLeave={this.onMouseLeaveHandler}>
                <File color={color} fill="none" />
                {nameText}
            </Link>
        );
    }
}

export default MenuElement;
