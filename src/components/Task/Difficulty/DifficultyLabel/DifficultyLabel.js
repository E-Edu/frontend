import React, { Component } from 'react';
import colorData from '../../../../lib/Colors.json';
import { Translation } from '../../../../i18n/i18n';

class DifficultyLabel extends Component {
    render() {
        const difficulty = this.props.difficulty ? this.props.difficulty : 'easy';
        const color = colorData.difficultyColor[difficulty];
        const { backgroundColor } = color;
        const { borderColor } = color;
        return (
            <span style={{
                color: '#1C2541',
                backgroundColor,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor,
                borderRadius: 10,
                padding: '0 0.33rem',
            }}
          >
            {Translation.t(`difficulty.${difficulty}`)}
          </span>
        );
    }
}

export default DifficultyLabel;
