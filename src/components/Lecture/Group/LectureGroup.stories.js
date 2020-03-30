import React from 'react';
import { object, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import LectureGroup from './LectureGroup';

const stories = storiesOf('lectureGroup', module);
stories.addDecorator(withKnobs);

const data = {
    name: 'Grundrechnen',
    fields: [{ name: 'Plus' }, { name: 'Minus' }, { name: 'Mal' }, { name: 'Geteilt' }],
};

stories.add('default', () => {
    return <LectureGroup name={data.name} fields={data.fields} />;
});

stories.add('dynamicInput', () => {
    const label = text('Name', data.name);
    const fields = object('Fields', data.fields);
    return <LectureGroup name={label} fields={fields} />;
});
