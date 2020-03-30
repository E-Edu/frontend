import React, {Component} from "react";
import './PageContent.scss';

class PageContent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <div className="page-content">
              { children }
            </div>
        );
    }

}

export default PageContent;