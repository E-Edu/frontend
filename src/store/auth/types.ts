import { User } from '../../lib/api/model/Model';

export interface AuthState {
    user?: User;
    jwt?: string;
}

export const UPDATE_AUTH = 'UPDATE_AUTH';

interface LoginAction {
    type: typeof UPDATE_AUTH;
    payload: AuthState;
}

export type AuthActionTypes = LoginAction;
