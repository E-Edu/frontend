import React from 'react';
import { t } from '../../../i18n/i18n';
import './subjectDescription.scss';

class SubjectDescription extends React.Component {
    render() {
        const { subjectDescription } = this.props;

        switch (subjectDescription) {
            case 'MATH':
                return <span>{t.t('component.subject.description.math', 'Something about apples and bananas')}</span>;
            case 'GERMAN':
                return <span>{t.t('component.subject.description.german', 'Language learning - Babel')}</span>;
            case 'COMPUTERSCIENCE':
                return <span>{t.t('component.subject.description.computerscience', '01010101010101010110')}</span>;
            case 'BIOLOGY':
                return <span>{t.t('component.subject.description.biology', 'Biology')}</span>;
            case 'PHYSICS':
                return <span>{t.t('component.subject.description.physic', 'Pay attention to falling apples!')}</span>;
            case 'HISTORY':
                return <span>{t.t('component.subject.description.history', 'I have a dream...')}</span>;
            case 'POLITICS':
                return <span>{t.t('component.subject.description.politics', 'Political Education')}</span>;
            case 'CHEMISTRY':
                return <span>{t.t('component.subject.description.chemistry', 'Chemistry')}</span>;
            default:
                return <span>{t.t('component.subject.description.unknown', 'Unknown')}</span>;
        }
    }
}

export default SubjectDescription;
