import React from 'react';
import {number,color, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";
import LogoutIcon from "./logout.icon";

const stories = storiesOf('icons', module);
stories.addDecorator(withKnobs);

stories.add('LogoutIcon default', () => {
    return <LogoutIcon/>
});

stories.add('LogoutIcon dynamicProperties', () => {
    const height = number("height", 24);
    const width = number("width", 24);
    const fill = color("fill", "#ffffff");
    const stroke = color("stroke", "#000000");

    return <LogoutIcon height={height} width={width} fill={fill} stroke={stroke}/>;
});