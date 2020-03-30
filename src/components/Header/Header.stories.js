import React from 'react';
import { radios, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Header from './Header';

const stories = storiesOf('header', module);
stories.addDecorator(withKnobs);

const site = { dashboard: 'Dashboard', landingpage: 'Landing' };

stories.add('landingpage', () => {
    return <Header side={site.landingpage} />;
});

stories.add('dashboard', () => {
    return <Header side={site.dashboard} />;
});

stories.add('dynamicInput', () => {
    const radio = radios('Site', site, site.dashboard);
    return <Header side={radio} />;
});
