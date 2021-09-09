import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {loadFromLocalStorage, localStorageMiddleware} from './utils/localstorage.js';
import userReducer from './user/userSlice'
import lessonReducer from './lesson/lessonSlice'


const middlewares = [localStorageMiddleware]

const configureStoreCreator = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            lesson: lessonReducer
        },
        preloadedState: loadFromLocalStorage(),
        middleware: [...getDefaultMiddleware(), ...middlewares]
    })
}

export default configureStoreCreator