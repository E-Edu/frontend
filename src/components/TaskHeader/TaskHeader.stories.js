import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TaskHeader from './TaskHeader';

const stories = storiesOf('taskHeader', module);
stories.addDecorator(withKnobs);

const moduleName = 'Mathe';

stories.add('default', () => {
    return <TaskHeader module={moduleName} />;
});

stories.add('dynamicInput', () => {
    const label = text('Label', moduleName);

    return <TaskHeader module={label} />;
});
