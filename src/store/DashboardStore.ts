import {observable, action} from "mobx";

class DashboardStore {
    @observable subjects = [];

    @action setSubjects(data:{displayName: string}[]) {
        this.subjects = data;
    }
    @action addSubjects(data:{displayName: string}[]) {
        data.forEach((item) => {
            this.subjects.push(item);
        })
    }
}

export default DashboardStore;