import React from 'react';
import ResultQuestion from "./ResultQuestion";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('resultQuestion', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <ResultQuestion/>
});
