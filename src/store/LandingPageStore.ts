import {observable, action} from "mobx";

class LandingPageStore {
    @observable redirect = false;

    @action setRedirect(value: boolean) {
        this.redirect = value;
    }
}

export default LandingPageStore;