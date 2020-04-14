import React from 'react';
import colorData from '../../../../lib/Colors.json';
import './DifficultyLabel.scss';
import { t } from '../../../../i18n/i18n';
import { DifficultyEnum } from '../../../../models/difficulty.enum';

interface DifficultyLabelProps {
    difficulty: DifficultyEnum;
    active?: boolean;
}

class DifficultyLabel extends React.Component<DifficultyLabelProps> {
    render() {
        const { difficulty, active } = this.props;
        const colors = colorData.difficultyColor;
        let color;
        if (difficulty in colors) {
            color = colorData.difficultyColor[difficulty];
        } else {
            color = colorData.difficultyColor.UNKNOWN;
        }
        const { borderColor } = color;
        let text;
        switch (difficulty) {
            case DifficultyEnum.EASY:
                text = t.t('component.task.difficulty.easy', 'Easy');
                break;
            case DifficultyEnum.MEDIUM:
                text = t.t('component.task.difficulty.medium', 'Medium');
                break;
            case DifficultyEnum.HARD:
                text = t.t('component.task.difficulty.hard', 'Hard');
                break;
            default:
                text = t.t('component.task.difficulty.unknown', 'Unknown');
        }
        let backgroundColor;
        if (active) {
            backgroundColor = color.backgroundColor.active;
        } else {
            backgroundColor = color.backgroundColor.inactive;
        }
        return (
            <div className="difficulty-label-container">
                <span
                    className="difficulty-label-item"
                    style={{
                        backgroundColor,
                        borderColor,
                    }}>
                    {text}
                </span>
            </div>
        );
    }
}

export default DifficultyLabel;
