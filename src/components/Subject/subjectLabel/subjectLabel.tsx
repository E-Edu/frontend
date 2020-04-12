import React from 'react';
import { t } from '../../../i18n/i18n';
import './subjectLabel.scss';

interface SubjectLabelProps {
    className?: string;
    subjectLabel?: string;
}

class SubjectLabel extends React.Component<SubjectLabelProps> {
    render() {
        const { subjectLabel, className } = this.props;

        switch (subjectLabel) {
            case 'MATH':
                return <span className={`title ${className}`}>{t.t('component.subject.label.math', 'Math')}</span>;
            case 'GERMAN':
                return <span className={`title ${className}`}>{t.t('component.subject.label.german', 'German')}</span>;
            case 'COMPUTERSCIENCE':
                return (
                    <span className={`title ${className}`}>
                        {t.t('component.subject.label.computerscience', 'Computer Science')}
                    </span>
                );
            case 'BIOLOGY':
                return (
                    <span className={`title ${className}`}>{t.t('component.subject.label.biology', 'Biology')}</span>
                );
            case 'PHYSICS':
                return <span className={`title ${className}`}>{t.t('component.subject.label.physic', 'Physics')}</span>;
            case 'HISTORY':
                return (
                    <span className={`title ${className}`}>{t.t('component.subject.label.history', 'History')}</span>
                );
            case 'POLITICS':
                return (
                    <span className={`title ${className}`}>{t.t('component.subject.label.politics', 'Politics')}</span>
                );
            case 'CHEMISTRY':
                return (
                    <span className={`title ${className}`}>
                        {t.t('component.subject.label.chemistry', 'Chemistry')}
                    </span>
                );
            default:
                return (
                    <span className={`title ${className}`}>{t.t('component.subject.label.unknown', 'Unknown')}</span>
                );
        }
    }
}

export default SubjectLabel;
