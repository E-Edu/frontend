import React, { ReactNode } from 'react';
import './PageLayout.scss';
import { withRouter } from 'react-router-dom';
import * as H from 'history';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import Footer from '../../Footer/Footer';

interface MatchParams {
    name: string;
}

interface PageLayoutProps extends RouteComponentProps<MatchParams> {
    childern?: ReactNode;
}

// from typings
interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

class PageLayout extends React.Component<PageLayoutProps> {
    hiddenSidebarPages = ['/', '/credits', '/imprint', '/privacy', '/login', '/register'];

    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    getClasses(): string {
        return this.isloggedIn() ? 'page-layout logged-in' : 'page-layout logged-out';
    }

    isloggedIn(): boolean {
        const route = this.props.location.pathname;
        /* this.setState(() => {
            return {visible: true};
        }); */
        return !this.hiddenSidebarPages.includes(route);
    }

    render() {
        const { location, children } = this.props;
        return (
            <div className={this.getClasses()}>
                <Header site={this.isloggedIn() ? 'dashboard' : 'landing'} />
                <Sidebar
                    className={this.isloggedIn() ? 'menu-bar' : 'logged-in-hidden'}
                    visible={this.isloggedIn()}
                    active={location.pathname}
                />
                <div className="layout-container">{children}</div>
                <Footer visible={this.isloggedIn()} />
            </div>
        );
    }
}

export default withRouter(PageLayout);
