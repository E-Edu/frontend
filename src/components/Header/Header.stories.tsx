import React from 'react';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const stories = storiesOf('header', module);
stories.addDecorator(withKnobs);

const site = { dashboard: 'dashboard', landingpage: 'landing' };

stories.add('landingpage', () => {
    return <Header site={site.landingpage} />;
});

stories.add('dashboard', () => {
    return <Header site={site.dashboard} />;
});

stories.add('dynamicInput', () => {
    const radio = radios('Site', site, site.dashboard);
    return <Header site={radio} />;
});
