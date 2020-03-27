import React from 'react';
import Login from "./index";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('login', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Login/>
});
