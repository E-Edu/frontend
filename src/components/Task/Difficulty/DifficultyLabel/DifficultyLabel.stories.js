import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import DifficultyLabel from './DifficultyLabel';

const stories = storiesOf('difficultylabel', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <DifficultyLabel difficulty="medium" />;
});

stories.add('dynamic', () => {
    const difficulty = text('Difficulty', 'easy');
    return <DifficultyLabel difficulty={difficulty} />;
});
