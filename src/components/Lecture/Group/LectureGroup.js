import React from 'react';
import './LectureGroup.scss';
import LectureSubject from "../Subject/LectureSubject";

class LectureGroup extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="LectureGroupe">
                <div className="lectureGroup">
                    <div className="lectureGroupTitle">
                        <p>{this.props.name}</p>
                    </div>

                    <div className="lectureGroupSubjects">
                        {this.props.fields.map((value,index) => {
                            return <LectureSubject key={index} name={value.name}/>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default LectureGroup;
