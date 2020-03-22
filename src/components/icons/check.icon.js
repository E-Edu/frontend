import './index.scss';
import React, {Component} from 'react';

class CheckIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className='icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={this.props.fill || 'none'} stroke={this.props.stroke || 'currentColor'}
                     stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" className="feather feather-check">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>

            </div>
        );
    }
}

export default CheckIcon;
