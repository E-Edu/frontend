import React from 'react';
import './Sidebar.scss';
import MenuElement from './MenuElement/MenuElement';
import { PermissionEnum } from '../../models/permission.enum';

interface SidebarProps {
    active?: string;
    visible?: boolean;
    className?: string;
}

interface SitesItems {
    label: string;
    iconName: string;
    route: string;
    permission: PermissionEnum;
    spacerBefore: boolean;
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
        const sites: SitesItems[] = [
            {
                label: 'Home',
                iconName: 'home',
                route: 'dashboard',
                permission: PermissionEnum.USER,
                spacerBefore: false,
            },
            {
                label: 'Neue Aufgabe',
                iconName: 'plus-circle',
                route: 'task/add',
                permission: PermissionEnum.ADMIN,
                spacerBefore: true,
            },
        ];
        const sitesHtml = sites.map((site, index) => {
            if (permission >= site.permission) {
                return (
                    <MenuElement
                        name={site.label}
                        file={site.iconName}
                        url={site.route}
                        active={this.props.active === `/${site.route}`}
                        key={index}
                        spacer={site.spacerBefore}
                    />
                );
            }
            return '';
        });

        if (!this.props.visible) {
            return null;
        }

        return (
            <div className={`menu ${this.props.className}`}>
                <div className="top-icons">{sitesHtml}</div>
                <div className="bottom-icons">
                    <MenuElement name="" key={0} file="settings" url="settings" active={active === 'settings'} />
                    <MenuElement name="" key={1} file="user" url="profile" active={active === 'profile'} />
                </div>
            </div>
        );
    }
}

export default Sidebar;
