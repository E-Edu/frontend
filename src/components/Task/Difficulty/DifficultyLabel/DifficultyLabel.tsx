import React from 'react';
import './DifficultyLabel.scss';
import { observer } from 'mobx-react';
import { t } from '../../../../i18n/i18n';
import { DifficultyEnum } from '../../../../models/difficulty.enum';

interface DifficultyLabelProps {
    difficulty: DifficultyEnum;
    isSelectable?: boolean;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
    color?: string;
}

@observer
class DifficultyLabel extends React.Component<DifficultyLabelProps> {
    render() {
        const { difficulty, selected, isSelectable, color, className, onClick } = this.props;
        let text;
        let backgroundColor;
        let borderColor;
        const opacityActive = 0.3;
        const opacityInactive = 0;
        const opacity = !selected && isSelectable ? opacityInactive : opacityActive;
        switch (difficulty) {
            case DifficultyEnum.EASY:
                text = t.t('component.task.difficulty.easy', 'Easy');
                backgroundColor = `rgba(25, 186, 63, ${opacity})`;
                borderColor = 'rgba(25, 186, 63, 1)';
                break;
            case DifficultyEnum.MEDIUM:
                text = t.t('component.task.difficulty.medium', 'Medium');
                backgroundColor = `rgba(255, 186, 0, ${opacity})`;
                borderColor = 'rgba(255, 186, 0, 1)';
                break;
            case DifficultyEnum.HARD:
                text = t.t('component.task.difficulty.hard', 'Hard');
                backgroundColor = `rgba(186, 25, 25, ${opacity})`;
                borderColor = 'rgba(186, 25, 25, 1)';
                break;
            default:
                text = t.t('component.task.difficulty.unknown', 'Unknown');
                backgroundColor = `rgba(80, 80, 80, ${opacity})`;
                borderColor = 'rgba(80, 80, 80, 1)';
        }
        return (
            <span
                className={`difficulty-label ${className}`}
                style={{
                    backgroundColor,
                    borderColor,
                    color,
                    cursor: isSelectable ? 'pointer' : null,
                }}
                onClick={onClick}
                role="button"
                tabIndex={0}>
                {text}
            </span>
        );
    }
}

export default DifficultyLabel;
