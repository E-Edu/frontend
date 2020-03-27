import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import FileTextIcon from "./file-text.icon";

const stories = storiesOf('FileTextIcon', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <FileTextIcon/>
});

stories.add('dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <FileTextIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});