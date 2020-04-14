import {observable, action} from "mobx";

class ProfileStore {
    @observable username = 'Morpheus';
    @observable disabled = true;

    @action setDisabled(value: boolean) {
        this.disabled = value;
    }
    @action setUsername(name: string) {
        this.username = name;
    }
}

export default ProfileStore;