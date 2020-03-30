import React, {Component} from "react";
import './FlexContainer.scss';

class FlexContainer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;
        const { direction } = this.props;

        const style = {};
        if (direction) style.flexDirection = direction;

        console.log("Flex: ",style, children);
        return (
            <div className="flex-container" style={style}>
              { children }
            </div>
        );
    }

}

export default FlexContainer;