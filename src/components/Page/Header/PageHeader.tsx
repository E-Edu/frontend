import React from 'react';
import './PageHeader.scss';

interface PageHeaderProps {
    mainTitle: string;
    secondaryTitle?: string;
}

class PageHeader extends React.Component<PageHeaderProps> {
    render() {
        const { mainTitle, secondaryTitle } = this.props;

        return (
            <div className="page-header">
                <div className="page-titles">
                    <span className="page-main-title">{mainTitle}</span>
                    {secondaryTitle && <span className="page-secondary-title">{secondaryTitle}</span>}
                </div>
            </div>
        );
    }
}

export default PageHeader;
