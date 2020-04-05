import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PageContent from './PageContent';

const stories = storiesOf('pageContent', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return (
        <PageContent>
            <h1>This is an example</h1>
        </PageContent>
    );
});
