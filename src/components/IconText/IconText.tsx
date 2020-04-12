import React from 'react';
import './IconText.scss';
import { ColorProperty } from 'csstype';

interface IconProps {
    color?: ColorProperty;
    text?: string;
    class?: string;
    width?: string;
    fontColor?: ColorProperty;
    fontSize?: number;
    distance?: string;
    position?: 'left' | 'right';
}

class IconText extends React.Component<IconProps> {
    render() {
        return (
            <div className={`icon-text ${this.props.class}`} style={{ width: this.props.width }}>
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
                            className="text left">
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
                            className="text right">
                            {this.props.text}
                        </span>
                        {this.props.children}
                    </>
                )}
            </div>
        );
    }
}

export default IconText;
