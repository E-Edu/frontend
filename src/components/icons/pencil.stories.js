import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import PencilIcon from "./pencil.icon";

const stories = storiesOf('PencilIcon', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <PencilIcon/>
});

stories.add('dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <PencilIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});