import './index.scss';
import React, {Component} from 'react';

class PencilIcon extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        email: '',
    };

    render(props) {
        return (
            <div className='icon'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={this.props.fill || 'none'} 
                    stroke={this.props.stroke || 'currentColor'} stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2">
                    <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                    
               </svg>
            </div>
        );
    }
}

export default PencilIcon;
