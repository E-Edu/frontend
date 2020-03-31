import React, { Component } from 'react';
import './PageContent.scss';

class PageContent extends Component {
    render() {
        const { children } = this.props;

        return <div className="page-content">{children}</div>;
    }
}

export default PageContent;
