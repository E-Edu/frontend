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
        admin: 3,
        privilegedStudent: 1,
        teacher: 2,
        user: 0,
    };

    render() {
        const { active } = this.props;
        const permission = 3; // TODO: get this from user-ms
        const sites: SitesItems[] = [
            {
                iconName: 'home',
                label: 'Home',
                permission: PermissionEnum.USER,
                route: 'dashboard',
                spacerBefore: false,
            },
            {
                iconName: 'plus-circle',
                label: 'Neue Aufgabe',
                permission: PermissionEnum.ADMIN,
                route: 'task/add',
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
