import React from 'react';
import './TaskHeader.scss';
import UserIcon from '../../components/icons/user.icon';
import UsersIcon from '../../components/icons/users.icon';
import IconText from '../../components/IconText/IconText';

class TaskHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task-header">
                <div className="lecture-header">
                    <div className="lecture-header-topic">
                        <span className="lecture-subject">{this.props.module}</span>
                    </div>
                    <div className="lecture-header-points">
                        <IconText
                            text="213 Punkte"
                            position="left"
                            class="lecture-points"
                            distance="0.4rem"
                            fontColor="#0b132b">
                            <UserIcon stroke="#0b132b" />
                        </IconText>
                        <IconText
                            text="21.323 Punkte"
                            position="left"
                            class="lecture-points"
                            distance="0.4rem"
                            fontColor="#0b132b">
                            <UsersIcon stroke="#0b132b" />
                        </IconText>
                    </div>
                    <div className="lecture-header-search">
                        <input type="text" placeholder="Suche" className="input" />
                    </div>
                </div>
            </div>
        );
    }
}

export default TaskHeader;
