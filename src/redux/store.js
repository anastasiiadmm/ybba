import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {loadFromLocalStorage, localStorageMiddleware} from "./utils/localstorage.js";
import userReducer from './user/userSlice'

const middlewares = [localStorageMiddleware]

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    preloadedState: loadFromLocalStorage(),
    middleware: [...getDefaultMiddleware(), ...middlewares]
})