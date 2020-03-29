import React from 'react';
import { number, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import HomeIcon from './home.icon';

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('HomeIcon default', () => {
    return <HomeIcon />;
});

stories.add('HomeIcon dynamicProperties', () => {
    const height = number('height', 24);
    const width = number('width', 24);
    const fill = color('fill', '#ffffff');
    const stroke = color('stroke', '#000000');

    return <HomeIcon height={height} width={width} fill={fill} stroke={stroke} />;
});
