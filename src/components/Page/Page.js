import React, { Component } from 'react';
import PageContent from './Content/PageContent';
import PageHeader from './Header/PageHeader';

class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        const { mainTitle } = this.props;
        const { secondaryTitle } = this.props;

        return (
            <div className="page">
                <PageHeader mainTitle={mainTitle} secondaryTitle={secondaryTitle} />
                <PageContent>{children}</PageContent>
            </div>
        );
    }
}

export default Page;
