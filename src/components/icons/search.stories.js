import React from 'react';
import { number, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import SearchIcon from './search.icon';

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('SearchIcon default', () => {
    return <SearchIcon />;
});

stories.add('SearchIcon dynamicProperties', () => {
    const height = number('height', 24);
    const width = number('width', 24);
    const fill = color('fill', '#ffffff');
    const stroke = color('stroke', '#000000');

    return <SearchIcon height={height} width={width} fill={fill} stroke={stroke} />;
});
