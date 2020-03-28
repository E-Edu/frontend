import React from 'react';
import './Lecture.scss';
import TaskHeader from "../../components/TaskHeader";
import LectureGroup from "../../components/Lecture/Group/LectureGroup";

class Lecture extends React.Component {

    constructor(props) {
        super(props);
    }

    data = [
        {name: "Grundrechnen", fields: [{name: "Plus"}, {name: "Minus"}, {name: "Mal"}, {name: "Geteilt"}]},
        {name: "Geometrie", fields: [{name: "Flächeninhalt"}, {name: "Volumen"}, {name: "Winkel berechnung"}]},
        {
            name: "Lineare Algebra",
            fields: [
                {name: "Vektoren"},
                {name: "Lineare Gleichungssysteme"},
                {name: "Geraden berechnen"},
                {name: "Ebenen in der Vektorrechnung"},
                {name: "Lagebeziehung"}
            ]
        },
        {name: "Logik", fields: [{name: "Logik Aufgaben"}]},
        {
            name: "Analysis",
            fields: [
                {name: "Grundlagen"},
                {name: "Funktionen Grundlagen"},
                {name: "Sekante, Tangente und Nor..."},
                {name: "Gleichungen lösen"},
                {name: "Kurvendiskussion"},
                {name: "Lineare Gleichungssysteme"},
                {name: "Rationale Funktionen (Bruc…"},
                {name: "e-Funktion"},
                {name: "Integralrechnung"}
            ]
        },
    ];

    render() {
        return (
            <div id="lecture">
                <div id='main'>
                    <TaskHeader module="Mathe"/>

                    {this.data.map((value, index) => {
                        return <LectureGroup key={index} name={value.name} fields={value.fields}/>
                    })}
                </div>
            </div>
        );
    }
}

export default Lecture;
