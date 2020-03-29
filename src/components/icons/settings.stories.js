import React from 'react';
import { number, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SettingsIcon from './settings.icon';

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('SettingsIcon default', () => {
    return <SettingsIcon />;
});

stories.add('SettingsIcon dynamicProperties', () => {
    const height = number('height', 24);
    const width = number('width', 24);
    const fill = color('fill', '#ffffff');
    const stroke = color('stroke', '#000000');

    return <SettingsIcon height={height} width={width} fill={fill} stroke={stroke} />;
});
