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
        const { active, visible, className } = this.props;
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
        const sitesHtml = sites.map((site) => {
            if (permission >= site.permission) {
                return (
                    <MenuElement
                        key={site.route}
                        keyProp={site.route}
                        name={site.label}
                        file={site.iconName}
                        url={site.route}
                        active={active === `/${site.route}`}
                        spacer={site.spacerBefore}
                    />
                );
            }
            return null;
        });

        if (!visible) {
            return null;
        }
        return (
            <div className={`menu ${className}`}>
                <div className="top-icons">{sitesHtml}</div>
                <div className="bottom-icons">
                    <MenuElement
                        key="settings"
                        name=""
                        file="settings"
                        url="settings"
                        active={active === '/settings'}
                        spacer
                    />
                    <MenuElement key="user" name="" file="user" url="profile" active={active === '/profile'} />
                </div>
            </div>
        );
    }
}

export default Sidebar;
