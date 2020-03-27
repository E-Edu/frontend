import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import ListIcon from "./list.icon";

const stories = storiesOf('ListIcon', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <ListIcon/>
});

stories.add('dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <ListIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});