import {computed, observable, action} from "mobx";

class LectureStore {
    @observable data = [
        { name: 'Grundrechnen', fields: [{ name: 'Plus' }, { name: 'Minus' }, { name: 'Mal' }, { name: 'Geteilt' }] },
        { name: 'Geometrie', fields: [{ name: 'Flächeninhalt' }, { name: 'Volumen' }, { name: 'Winkel berechnung' }] },
        {
            name: 'Lineare Algebra',
            fields: [
                { name: 'Vektoren' },
                { name: 'Lineare Gleichungssysteme' },
                { name: 'Geraden berechnen' },
                { name: 'Ebenen in der Vektorrechnung' },
                { name: 'Lagebeziehung' },
            ],
        },
        { name: 'Logik', fields: [{ name: 'Logik Aufgaben' }] },
        {
            name: 'Analysis',
            fields: [
                { name: 'Grundlagen' },
                { name: 'Funktionen Grundlagen' },
                { name: 'Sekante, Tangente und Nor...' },
                { name: 'Gleichungen lösen' },
                { name: 'Kurvendiskussion' },
                { name: 'Lineare Gleichungssysteme' },
                { name: 'Rationale Funktionen (Bruc…' },
                { name: 'e-Funktion' },
                { name: 'Integralrechnung' },
            ],
        },
    ];

    @action setData(data:{name: string, fields:{name: string}[]}[]) {
        data.forEach((item) => {
            this.data.push(item);
        })
    }
}

export default LectureStore;