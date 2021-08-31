import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {loadFromLocalStorage, localStorageMiddleware} from "./utils/localstorage.js";
import userReducer from './user/userSlice'

const middlewares = [localStorageMiddleware]

const configureStoreCreator = () => {
    return configureStore({
        reducer: {
            user: userReducer,
        },
        preloadedState: loadFromLocalStorage(),
        middleware: [...getDefaultMiddleware(), ...middlewares]
    })
}

export default configureStoreCreator