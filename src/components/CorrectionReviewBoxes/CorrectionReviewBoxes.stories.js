import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import CorrectionReviewBoxes from './CorrectionReviewBoxes';

const stories = storiesOf('correctionReviewBoxes', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <CorrectionReviewBoxes />;
});
