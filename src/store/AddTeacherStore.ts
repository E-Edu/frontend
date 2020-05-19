import {computed, observable, action} from "mobx";

class AddTeacherStore {
    @observable email = '';
    @observable pendingRequests = [
        {name: "Herr Lehrer Mustermann", email: "lehrer.mustermann@lehrer-mail.de"},
        {name: "Herr Lehrer Mustermann2", email: "lehrer.mustermann2@lehrer-mail.de"},
    ];
    @observable isValidEmail = false;

    @computed get getEmail(): string {
        return this.email;
    }
    @computed get getPendingRequests(): any[] {
        return this.pendingRequests.slice();
    }
    @computed get getIsValidEmail(): boolean {
        return this.isValidEmail;
    }

    @action setEmail(email: string) {
        this.email = email;
    }
    @action setPendingRequests(data:{name: string, email: string}[]) {
        this.pendingRequests = data;
    }
    @action addPendingRequests(data:{name: string, email: string}[]) {
        data.forEach((item) => {
            this.pendingRequests.push(item);
        })
    }
    @action addPendingRequest(data:{name: string, email: string}) {
        this.pendingRequests.push(data);
    }
    @action setIsValidEmail(value: boolean) {
        this.isValidEmail = value;
    }
}

export default AddTeacherStore;