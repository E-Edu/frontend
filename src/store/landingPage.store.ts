import {computed, observable, action} from "mobx";

class LandingPageStore {
    @observable showModal = false;

    @action setShowModal(value: boolean) {
        this.showModal = value;
    }
}

export default LandingPageStore;