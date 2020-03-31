import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

const stories = storiesOf('textInput', module);
stories.addDecorator(withKnobs);

const data = {
    placeholder: 'Placeholder text',
    maxWidth: '30%',
    shadow: 'red',
};

stories.add('default', () => {
    return <TextInput placeholder={data.placeholder} />;
});

stories.add('dyanmicInput', () => {
    const placeholder = text('Placeholder', data.placeholder);
    const maxWidth = text('Max width', data.maxWidth);
    const shadow = text('Shadow', data.shadow);

    return <TextInput placeholder={placeholder} maxWidth={maxWidth} shadow={shadow} />;
});
