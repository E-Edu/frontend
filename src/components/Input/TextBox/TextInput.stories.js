import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('textBox', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return(
        <TextBox placeholder="Placeholder text" />
    );
});
