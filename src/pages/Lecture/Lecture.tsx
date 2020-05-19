import React from 'react';
import './Lecture.scss';
import { observer } from 'mobx-react';
import TaskHeader from '../../components/TaskHeader/TaskHeader';
import LectureGroup from '../../components/Lecture/Group/LectureGroup';
import LectureStore from '../../store/LectureStore';

const lectureStore = new LectureStore();

@observer
class Lecture extends React.Component {
    render() {
        return (
            <div className="lecture">
                <div className="main">
                    <TaskHeader module="Mathe" />

                    {lectureStore.data.map((value) => {
                        return <LectureGroup key={value.name} name={value.name} fields={value.fields} />;
                    })}
                </div>
            </div>
        );
    }
}

export default Lecture;
