import React from 'react';
import './Sidebar.scss';
import MenuElement from './MenuElement/MenuElement';

interface SidebarProps {
    active?: string;
    visible?: boolean;
}

class Sidebar extends React.Component<SidebarProps> {
    permission = {
        user: 0,
        privilegedStudent: 1,
        teacher: 2,
        admin: 3,
    };

    render() {
        const { active } = this.props;
        const permission = 3; // TODO: get this from user-ms
        const sites = [
            // Name, icon name, route, permission, spacer before it
            ['Home', 'home', 'dashboard', this.permission.user],
            ['Aufgaben', 'edit', 'task/lecture', this.permission.user],
            ['Neue Aufgabe', 'plus-circle', 'dashboard', this.permission.teacher, true],
            ['Meine Aufgaben', 'list', 'task/list', this.permission.teacher],
            ['Korrektur', 'check', 'correction/review', this.permission.privilegedStudent],
            ['Reports', 'alert-circle', 'reports/list', this.permission.admin, true],
            ['Lehrer hinzufügen', 'teacher', 'teacher/add', this.permission.admin],
        ];
        const sitesHtml = sites.map((site, index) => {
            if (permission >= site[3]) {
                return (
                    <MenuElement
                        name={site[0]}
                        file={site[1]}
                        url={site[2]}
                        active={this.props.active === site[2]}
                        key={index}
                        spacer={site[4]}
                    />
                );
            }
            return '';
        });

        if (this.props.visible) {
            return null;
        }
        return (
            <div className="menu">
                <div className="top-icons">{sitesHtml}</div>
                <div className="bottom-icons">
                    <MenuElement name="" file="settings" url="settings" active={active === 'settings'}/>
                    <MenuElement name="" file="user" url="profile" active={active === 'profile'}/>
                </div>
            </div>
        );
    }
}

export default Sidebar;
