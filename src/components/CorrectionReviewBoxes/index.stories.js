import React from 'react';
import CorrectionReviewBoxes from "./index";
import {withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('correctionReviewBoxes', module);
stories.addDecorator(withKnobs);


stories.add('default', () => {
    return <CorrectionReviewBoxes/>
});




