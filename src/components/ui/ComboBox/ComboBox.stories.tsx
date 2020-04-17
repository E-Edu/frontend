import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Combobox from './ComboBox';

const stories = storiesOf('ComboBox', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Combobox data={['Test1', 'Test2']} />;
});
