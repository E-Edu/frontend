import React, {Component} from "react";
import "./TextInput.scss"

class TextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { placeholder } = this.props;
        const { onChange } = this.props;
        const { maxWidth } = this.props;
        let { shadow } = this.props;

        const style = {};

        if (maxWidth) style.maxWidth = maxWidth;
        if (shadow !== undefined) {
            switch (shadow) {
                case "red": {
                    shadow = "inset 0 0 0.33rem 0 rgba(255, 0, 0, 1)";
                    break;
                }

                default: {
                    shadow = null;
                    break;
                }
            }

            if (shadow) style.boxShadow = shadow;
        }

        return (
          <input
            className="text-box"
            placeholder={placeholder}
            onChange={onChange}
            style={style}
          />
        );
    }

}

export default TextInput;