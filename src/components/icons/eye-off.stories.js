import React from 'react';
import { number, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import EyeOffIcon from './eye-off.icon';

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('EyeOffIcon default', () => {
    return <EyeOffIcon />;
});

stories.add('EyeOffIcon dynamicProperties', () => {
    const height = number('height', 24);
    const width = number('width', 24);
    const fill = color('fill', '#ffffff');
    const stroke = color('stroke', '#000000');

    return <EyeOffIcon height={height} width={width} fill={fill} stroke={stroke} />;
});
