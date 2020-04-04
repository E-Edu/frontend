import React, { Component } from 'react';
import colorData from '../../../../lib/Colors.json';
import './DifficultyLabel.scss';
import { WithT as i18n } from 'i18next';

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
                {i18n.t(`difficulty.${difficulty}`)}
            </span>
        );
    }
}

export default DifficultyLabel;
