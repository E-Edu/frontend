import {observable, action} from "mobx";

class RegisterStore {
    @observable email = '';
    @observable password = '';
    @observable retypedPassword = '';
    @observable isAgbAccepted = false;
    @observable accountType: 'teacher' | 'pupil' | 'unset' = 'unset';
    @observable teacherToken = '';

    @action setEmail(value: string) {
        this.email = value;
    }
    @action setPassword(value: string) {
        this.password = value;
    }
    @action setRetypedPassword(value: string) {
        this.retypedPassword = value;
    }
    @action setIsAgbAccepted(value: boolean) {
        this.isAgbAccepted = value;
    }
    @action setAccountType(value: 'teacher' | 'pupil' | 'unset') {
        this.accountType = value;
    }
    @action setTeacherToken(value: string) {
        this.teacherToken = value;
    }
}

export default RegisterStore;