import React from 'react';
import LectureSubject from "./index";
import {text, withKnobs} from "@storybook/addon-knobs";
import {storiesOf} from "@storybook/react";

const stories = storiesOf('lectureSubjects', module);
stories.addDecorator(withKnobs);

stories.add('default', () => {
    return <LectureSubject name="Default"/>
});

stories.add('dynamicInput', () => {
    const label = text("Label", "Plus");

    return <LectureSubject name={label}/>;
});



