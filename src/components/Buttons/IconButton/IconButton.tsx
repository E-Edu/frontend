import React from 'react';
import './IconButton.scss';
import { ColorProperty } from 'csstype';

interface IconButtonProps {
    class?: string;
    clickEvent?: any;
    width?: string;
    position?: 'left' | 'right';
    fontColor?: ColorProperty;
    fontSize?: number;
    distance?: string;
    text?: string;
}

class IconButton extends React.Component<IconButtonProps> {
    render() {
        const { width } = this.props;
        return (
            <div
                className={`icon-button ${this.props.class}`}
                style={{ width, outline: 'none' }}
                onClick={this.props.clickEvent}
                role="button"
                tabIndex={0}>
                {this.props.position === 'left' ? (
                    <>
                        {this.props.children}
                        <span
                            style={{
                                color: this.props.fontColor,
                                fontSize: this.props.fontSize,
                                paddingLeft: this.props.distance,
                                textAlign: 'left',
                            }}
                            className="text">
                            {this.props.text}
                        </span>
                    </>
                ) : (
                    <>
                        <span
                            style={{
                                color: this.props.fontColor,
                                fontSize: this.props.fontSize,
                                paddingRight: this.props.distance,
                                textAlign: 'right',
                            }}
                            className="text">
                            {this.props.text}
                        </span>
                        {this.props.children}
                    </>
                )}
            </div>
        );
    }
}

export default IconButton;
