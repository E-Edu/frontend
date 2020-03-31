import React from 'react';
import { color, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Button />;
});

stories.add('Primary Button', () => {
    const label = text('Label', 'Default');
    const type = text('type', 'text');
    return <Button name={label} type={type} disable={false} styleType="primary" />;
});
stories.add('Primary Button disabled', () => {
    const label = text('Label', 'Default');
    const type = text('type', 'text');
    return <Button name={label} type={type} disable styleType="primary" />;
});

stories.add('Secondary Button', () => {
    const label = text('Label', 'Default');
    const type = text('type', 'text');
    return <Button name={label} type={type} disable={false} styleType="secondary" />;
});
stories.add('Secondary Button disabled', () => {
    const label = text('Label', 'Default');
    const type = text('type', 'text');
    return <Button name={label} type={type} disable styleType="secondary" />;
});
