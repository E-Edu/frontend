import React, { Component } from 'react';
import './DifficultyLabel.scss';

class DifficultyLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="correction" style={{backgroundColor: this.props.level==='easy'? '#19ba3f4d' : this.props.level==='medium'? '#ffba004d' : this.props.level==='hard'? '#ba19194d' : '#ffffff', borderColor: this.props.level==='easy'? '#19ba3f' : this.props.level==='medium'? '#ffba00' : this.props.level==='hard'? '#ba1919' : '#ffffff'}}>
                <p>
                    {
                        this.props.level === 'easy'? 'Leicht' : this.props.level === 'medium'? 'Mittel' : this.props.level === 'hard'? 'Schwer' : 'Fehler'
                    }
                </p>
            </div>
        );
    }
}

export default DifficultyLabel;
