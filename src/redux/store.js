import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {loadFromLocalStorage, localStorageMiddleware} from './utils/localstorage.js';
import userReducer from './user/userSlice'
import authReducer from './auth/authSlice'
import childReducer from './child/childSlice'


const middlewares = [localStorageMiddleware]

const configureStoreCreator = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            auth: authReducer,
            child: childReducer
        },
        preloadedState: loadFromLocalStorage(),
        middleware: [...getDefaultMiddleware(), ...middlewares]
    })
}

export default configureStoreCreator