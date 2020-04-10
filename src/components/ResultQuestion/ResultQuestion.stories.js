import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ResultQuestion from './ResultQuestion';

const stories = storiesOf('resultQuestion', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <ResultQuestion />;
});
