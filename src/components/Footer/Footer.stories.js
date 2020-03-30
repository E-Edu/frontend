import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';

const stories = storiesOf('footer', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return (
        <div style={{ height: '20vh', width: '100vw' }}>
            <Footer />
        </div>
    );
});
