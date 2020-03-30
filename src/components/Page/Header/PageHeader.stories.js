import React from 'react';
import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import PageHeader from "./PageHeader";

const stories = storiesOf('pageHeader', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <PageHeader mainTitle="MainTitle" secondaryTitle={"SecondaryTitle"}/>;
});

stories.add('dynamicInput', () => {
    const mainTitle = text('Main Title', "MainTitle");
    const secondaryTitle = text('Secondary Title', "SecondaryTitle");

    return <PageHeader mainTitle={mainTitle} secondaryTitle={secondaryTitle} />;
});
