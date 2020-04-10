import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Login from './Login';

const stories = storiesOf('login', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Login />;
});
