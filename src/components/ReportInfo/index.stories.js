import React from 'react';
import ReportInfo from "./index";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('reportInfo', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <ReportInfo/>
});
