import { combineReducers } from 'redux'
import { userReducer } from './users/reducers'

const rootReducer = combineReducers({
    users: userReducer
})

export type RootState = ReturnType<typeof rootReducer>