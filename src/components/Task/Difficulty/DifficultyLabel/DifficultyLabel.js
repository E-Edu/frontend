import React, { Component } from 'react';
import colorData from '../../../../lib/Colors.json';
import { Translation } from '../../../../i18n/i18n';
import './DifficultyLabel.scss';

class DifficultyLabel extends Component {
    render() {
        const { difficulty } = this.props;
        const colors = colorData.difficultyColor;
        let color;
        if (difficulty in colors) {
            color = colorData.difficultyColor[difficulty];
        } else {
            color = colorData.difficultyColor.unknown;
        }
        const { backgroundColor } = color;
        const { borderColor } = color;
        return (
            <span className="difficulty-label" style={{ backgroundColor, borderColor }}>
                {Translation.t(`difficulty.${difficulty}`)}
            </span>
        );
    }
}

export default DifficultyLabel;
