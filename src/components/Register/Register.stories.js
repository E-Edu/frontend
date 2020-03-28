import React from 'react';
import Register from "./Register";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('register', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Register/>
});
