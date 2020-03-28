import './index.scss';
import React, {Component} from 'react';

class CrossIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props){
        return(
            <div children='icon'> 
                <svg xmlns="http://www.w3.org/2000/svg" width="26.121" height="26.121" viewBox="0 0 26.121 26.121"
                     fill={this.props.fill || 'none'}
                     stroke={this.props.stroke || 'currentColor'}
                     stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round" className="feather CrossIcon"
                     >
                    <g transform="translate(-4.939 -4.939)">
                    <line class="a" x1="24" y2="24" transform="translate(6 6)" />
                    <line class="a" x2="24" y2="24" transform="translate(6 6)" />
                    </g>
                </svg>
            </div>
        );
    }
}

export default CrossIcon;