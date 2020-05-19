import React from 'react';
import { number, color, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import TeacherIcon from './TeacherIcon';

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);
const DEFAULTSIZE = 24;

stories.add('TeacherIcon default', () => {
    return <TeacherIcon />;
});

stories.add('TeacherIcon dynamicProperties', () => {
    const height = number('height', DEFAULTSIZE);
    const width = number('width', DEFAULTSIZE);
    const fill = color('fill', '#ffffff');
    const stroke = color('stroke', '#000000');

    return <TeacherIcon height={height} width={width} fill={fill} stroke={stroke} />;
});
