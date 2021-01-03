import { combineReducers, createStore } from 'redux'
import { userReducer } from './users/reducers'

interface reduxGlobal extends Window {
    __REDUX_DEVTOOLS_EXTENSION__: any | Function
}

const rootReducer = combineReducers({
    users: userReducer
})

const _window: Partial<reduxGlobal> = window;

export const store = createStore(
    rootReducer,
    _window.__REDUX_DEVTOOLS_EXTENSION__  && _window.__REDUX_DEVTOOLS_EXTENSION__()
)

export type RootState = ReturnType<typeof rootReducer>