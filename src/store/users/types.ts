import { type } from "os";
import { IUser } from "../../interfaces/IUser";

export const SET_USERS = 'SET_USERS'

interface SetUserActions {
    type: typeof SET_USERS,
    payload: IUser[]
}

export type UserActionType = SetUserActions
export type UserState = { users: IUser[] }