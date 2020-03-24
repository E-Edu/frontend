import './index.scss';
import React, {Component} from 'react';

class LogoutIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg"
                     width={this.props.width || '24'}
                     height={this.props.height || '24'}
                     viewBox="0 0 24 24"
                     fill={this.props.fill || 'none'}
                     stroke={this.props.stroke || 'currentColor'}
                     stroke-width="2"
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     className="feather feather-calendar">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
            </div>
        );
    }
}

export default LogoutIcon;
