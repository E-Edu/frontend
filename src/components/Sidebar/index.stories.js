import React from 'react';
import MenuElement from "./index";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('sitebar', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <MenuElement/>
});
