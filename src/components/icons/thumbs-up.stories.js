import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import ThumbsUpIcon from "./thumbs-up.icon";

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('ThumbsUpIcon default', () => {
    return <ThumbsUpIcon/>
});

stories.add('ThumbsUpIcon dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <ThumbsUpIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});