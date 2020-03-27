import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import TagIcon from "./tag.icon";

const stories = storiesOf('TagIcon', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <TagIcon/>
});

stories.add('dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <TagIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});