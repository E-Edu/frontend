import React from 'react';
import DifficultyLabel from './DifficultyLabel';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('difficultylabel', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <DifficultyLabel difficulty="medium"/>;
});
