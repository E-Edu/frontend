import {observable, action} from "mobx";

class SettingsStore {
    @observable email = '';
    @observable name = '';
    @observable surname = '';
    @observable selectedLanguage = '';
    @observable oldPassword = '';
    @observable newPassword = '';

    @action setEmail(email: string) {
        this.email = email;
    }
    @action setName(name: string) {
        this.name = name;
    }
    @action setSurname(surname: string) {
        this.surname = surname;
    }
    @action setSelectedLanguage(value: string) {
        this.selectedLanguage = value;
    }
    @action setOldPassword(oldPassword: string) {
        this.oldPassword = oldPassword;
    }
    @action setNewPassword(newPassword: string) {
        this.newPassword = newPassword;
    }
}

export default SettingsStore;