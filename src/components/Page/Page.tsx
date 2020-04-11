import React from 'react';
import PageContent from './Content/PageContent';
import PageHeader from './Header/PageHeader';

// TODO move in Templates

interface PageProps {
    children: any;
    mainTitle: string;
    secondaryTitle?: string;
}

class Page extends React.Component<PageProps> {
    render() {
        const { children, mainTitle, secondaryTitle } = this.props;

        return (
            <div className="page">
                <PageHeader mainTitle={mainTitle} secondaryTitle={secondaryTitle} />
                <PageContent>{children}</PageContent>
            </div>
        );
    }
}

export default Page;
