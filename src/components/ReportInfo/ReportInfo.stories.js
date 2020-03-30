import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import ReportInfo from './ReportInfo';

const stories = storiesOf('reportInfo', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <ReportInfo />;
});
