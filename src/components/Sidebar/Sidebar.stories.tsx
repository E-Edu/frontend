import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import MenuElement from './Sidebar';

const stories = storiesOf('sitebar', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <MenuElement />;
});
