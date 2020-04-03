import './index.scss';
import React, { Component } from 'react';

class TeacherIcon extends Component {
    render(props) {
        return (
            <div className="icon">
                <svg
                    id="Teacher"
                    xmlns="http://www.w3.org/2000/svg"
                    width={this.props.width || 24}
                    height={this.props.height || 24}
                    viewBox="0 0 27 27"
                    fill={this.props.color || 'none'}
                    stroke={this.props.fill || 'currentColor'}>
                    <path
                        id="Pfad_71"
                        data-name="Pfad 71"
                        className="cls-1"
                        d="M19.837,19.607a6.974,6.974,0,1,0-7.1-6.973A7.036,7.036,0,0,0,19.837,19.607Zm0-12.139a5.18,5.18,0,1,1-5.271,5.166,5.226,5.226,0,0,1,5.271-5.166Zm3.487,13.488H16.337A9.934,9.934,0,0,0,6.33,30.788v.958a.912.912,0,0,0,.92.9h12.2a.894.894,0,0,0,.275,0,.964.964,0,0,0,.275,0H32.355a.929.929,0,0,0,.686-.245.9.9,0,0,0,.288-.659v-.958a9.934,9.934,0,0,0-10.007-9.833Zm-3.006,1.794,1.126,5.584L19.727,30.4l-1.716-2.05,1.112-5.584ZM8.169,30.842a8.164,8.164,0,0,1,8.168-8.093h.919L16.131,28.4a.852.852,0,0,0,.192.742l1.373,1.7H8.169Zm23.335,0H21.7l1.373-1.7a.892.892,0,0,0,.192-.742l-1.139-5.651h1.139A8.165,8.165,0,0,1,31.5,30.842Z"
                        transform="translate(-6.33 -5.66)"
                        fill={this.props.color}
                    />
                </svg>
            </div>
        );
    }
}

export default TeacherIcon;
