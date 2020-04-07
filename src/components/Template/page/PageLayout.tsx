import React, { Component } from 'react';
import './PageLayout.scss';
import { withRouter } from 'react-router-dom';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Footer from '../../Footer/Footer';

class PageLayout extends Component {
    hiddenSidebarPages = ['/', '/credits', '/imprint', '/privacy'];

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    gridLayout() {
        if (this.renderSitebar()) {
            return '\'header header\' \'content content\' \'footer footer\'';
        }
        return '\'header header\' \'sidebar content\'';
    }

    renderSitebar() {
        const route = this.props.location.pathname;
        /* this.setState(() => {
            return {visible: true};
        }); */
        return this.hiddenSidebarPages.includes(route);
    }

    render() {
        return (
            <div className="page-layout" style={{ gridTemplateAreas: this.gridLayout() }}>
                <Header site={!this.renderSitebar() ? 'dashboard' : 'landing'}/>
                <Sidebar active={this.props.location.pathname} visible={this.renderSitebar()}/>
                <div className="layout-container">{this.props.children}</div>
                {/*      {
                    this.state.visible && <Footer/>
                } */}
                <Footer visible={!this.renderSitebar()}/>
            </div>
        );
    }
}

export default withRouter(PageLayout);
