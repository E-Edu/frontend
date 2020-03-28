import React from 'react';
import Login from "./Login";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('login', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Login/>
});
