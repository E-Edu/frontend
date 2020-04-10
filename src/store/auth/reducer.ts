import { AuthActionTypes, AuthState, UPDATE_AUTH } from './types';

const initialState: AuthState = {};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case UPDATE_AUTH: {
            return {
                ...state,
                ...action.payload,
            };
        }
        default:
            return state;
    }
}
