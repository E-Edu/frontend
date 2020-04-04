import React, { Component } from 'react';
import colorData from '../../../../lib/Colors.json';
import './DifficultyLabel.scss';
import { t } from '../../../../i18n/i18n';

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

        switch (difficulty) {
            case 'easy':
                return (
                    <span
                        className="difficulty-label"
                        style={{
                            backgroundColor,
                            borderColor,
                        }}>
                        {t.t('component.task.difficulty.easy', 'Easy')}
                    </span>
                );
            case 'medium':
                return (
                    <span
                        className="difficulty-label"
                        style={{
                            backgroundColor,
                            borderColor,
                        }}>
                        {t.t('component.task.difficulty.medium', 'Medium')}
                    </span>
                );
            case 'hard':
                return (
                    <span
                        className="difficulty-label"
                        style={{
                            backgroundColor,
                            borderColor,
                        }}>
                        {t.t('component.task.difficulty.hard', 'Hard')}
                    </span>
                );
            default:
                return (
                    <span
                        className="difficulty-label"
                        style={{
                            backgroundColor,
                            borderColor,
                        }}>
                        {t.t('component.task.difficulty.unknown', 'Unknown')}
                    </span>
                );
        }
    }
}

export default DifficultyLabel;
