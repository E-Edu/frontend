import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import FlexContainer from "./FlexContainer";

const stories = storiesOf('pageContent', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return(
        <FlexContainer>
            <h1>This text </h1>
            <h1>should be in the same line</h1>
        </FlexContainer>
    );
});
