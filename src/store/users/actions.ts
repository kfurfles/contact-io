import { IUser } from '../../interfaces/IUser';
import { SET_USERS, UserActionType } from './types'

export function setUsers(users: IUser[]): UserActionType{
    return {
        payload: users,
        type: SET_USERS
    }
}