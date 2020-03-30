import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Register from './Register';

const stories = storiesOf('register', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Register />;
});
