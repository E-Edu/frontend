import React, { Component } from 'react';
import './DifficultyLabel.scss';

class DifficultyLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'icon-button ' + this.props.class} style={{ width: this.props.width }} onClick={this.props.clickEvent}>
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

export default DifficultyLabel;
