import React from 'react';
import colorData from '../../../../lib/Colors.json';
import './DifficultyLabel.scss';
import { t } from '../../../../i18n/i18n';
import { DifficultyEnum } from '../../../../models/difficulty.enum';

interface DifficultyLabelProps {
    difficulty: DifficultyEnum;
}

class DifficultyLabel extends React.Component<DifficultyLabelProps> {
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
            case DifficultyEnum.EASY:
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
            case DifficultyEnum.MEDIUM:
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
            case DifficultyEnum.HARD:
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
