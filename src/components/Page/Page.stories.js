import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PageContent from "./Content/PageContent";
import PageHeader from "./Header/PageHeader";

const stories = storiesOf('page', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return(
        <div>
          <PageHeader mainTitle="MainTitle" secondaryTitle="SecondaryTitle" />

          <PageContent>
            <h1>This is an example</h1>
          </PageContent>
        </div>
    );
});
