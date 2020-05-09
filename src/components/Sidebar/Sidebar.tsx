import React from 'react';
import './Sidebar.scss';
import MenuElement from './MenuElement/MenuElement';
import { PermissionEnum } from '../../models/permission.enum';
import { t } from '../../i18n/i18n';

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
                label: t.t('component.sidebar.home', 'Home'),
                permission: PermissionEnum.USER,
                route: 'dashboard',
            },
            {
                iconName: 'plus-circle',
                label: t.t('component.sidebar.newTask', 'New Task'),
                permission: PermissionEnum.ADMIN,
                route: 'task/add',
            },
        ];
        const sitesHtml = sites.map((site) => {
            if (permission >= site.permission) {
                return (
                    <MenuElement
                        key={site.route}
                        name={site.label}
                        file={site.iconName}
                        url={site.route}
                        active={active === `/${site.route}`}
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
                    />
                </div>
            </div>
        );
    }
}

export default Sidebar;
