import { User } from '../../lib/api/model/Model';
import { UPDATE_AUTH } from './types';

export function login(user: User, jwt: string) {
    return {
        type: UPDATE_AUTH,
        payload: { user, jwt },
    };
}
