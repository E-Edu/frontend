import React from 'react';
import './index.scss';
import UserIcon from "../../components/icons/user.icon";
import UsersIcon from "../../components/icons/users.icon";

class TaskHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="TaskHeader">
                <div className='lectureHeader'>
                    <div className='lectureHeaderTopic'>
                        <span className='lectureSubject'>{this.props.module}</span>
                    </div>
                    <div className='lectureHeaderPoints'>
                        <div className='lecturePoints'>
                            <UserIcon/>
                            <p className="lecturePointText"><span>213</span> Punkte</p>
                        </div>
                        <div className='lecturePoints'>
                            <UsersIcon/>
                            <p className="lecturePointText"><span>21.323</span> Punkte</p>
                        </div>
                    </div>

                    <div className='lectureHeaderSearch'>
                        <input type="text" placeholder="Suche" className="input"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskHeader;
