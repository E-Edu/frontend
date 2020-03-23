import './index.scss';
import React, {Component} from 'react';

class SearchIcon extends Component {
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
                     className="feather feather-search">
                    <circle cx="11" cy="11" r="8"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
            </div>
        );
    }
}

export default SearchIcon;
