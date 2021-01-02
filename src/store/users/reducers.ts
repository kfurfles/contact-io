import { SET_USERS, UserActionType, UserState } from './types'

const initialState: UserState = {
    users: []
}

export function userReducer(
    state = initialState,
    action: UserActionType
): UserState {
    switch (action.type) {
        case SET_USERS:
            return {
                users: [...state.users,...action.payload]
            }
            
        default:
            return state
    }
}