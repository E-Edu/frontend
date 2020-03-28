import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import AwardIcon from "./award.icon";

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('AwardIcon default', () => {
    return <AwardIcon/>
});

stories.add('AwardIcon dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <AwardIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});
