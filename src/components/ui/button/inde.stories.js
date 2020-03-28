import React from 'react';
import Button from "./index";
import {color, text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('Button', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <Button name="Default" type="text" backgroundColor="transparent"BorderColor="#5BC0BE" FontColor="#5BC0BE"/>;
});

stories.add('Button', () => {
    const label = text("Label", "Default");
    const type = text("type", "text")
    const border_Color = color("Border color", "#5BC0BE");
    const background = color("Background color","#000000");
    const Font_Color = color("Font color", "#5BC0BE");
    const HoverBack = color("Hover Background","#0B132B");
    const HoverColor = color("Hover Color", "#fff");
    return <Button name={label} type={type} backgroundColor={background} BorderColor={border_Color} FontColor={Font_Color} hoverback={HoverBack} hovercolor={HoverColor}/>;
});



