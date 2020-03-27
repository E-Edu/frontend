import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import CodePenIcon from "./codepen.icon";

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('CodePenIcon default', () => {
    return <CodePenIcon/>
});

stories.add('CodePenIcon dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <CodePenIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});