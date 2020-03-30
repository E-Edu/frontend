import React from 'react';
import './LectureGroup.scss';
import LectureSubject from '../Subject/LectureSubject';

class LectureGroup extends React.Component {
    render() {
        return (
            <div className="lecture-group-wrapper">
                <div className="lecture-group">
                    <div className="lecture-group-title">
                        <p>{this.props.name}</p>
                    </div>

                    <div className="lecture-group-subjects">
                        {this.props.fields.map((value, index) => {
                            return <LectureSubject key={index} name={value.name} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default LectureGroup;
