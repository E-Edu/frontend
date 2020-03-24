import './index.scss';
import React, {Component} from 'react';

class ListIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width || '24'} height={this.props.height || '24'} viewBox="0 0 24 24" fill={this.props.fill || 'none'}
                     stroke={this.props.stroke || 'currentColor'}
                     stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" className="feather feather-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
            </div>
        );
    }
}

export default ListIcon;
