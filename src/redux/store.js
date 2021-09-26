import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'

import {loadFromLocalStorage, localStorageMiddleware} from './utils/localstorage.js';
import userReducer from './user/userSlice'
import lessonReducer from './lesson/lessonSlice'
import authReducer from './auth/authSlice'
import childReducer from './child/childSlice'
import lessonsReducer from './lessons/lessonsSlice'


const middlewares = [localStorageMiddleware]

const configureStoreCreator = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            lesson: lessonReducer,
            auth: authReducer,
            child: childReducer,
            lessons: lessonsReducer
        },
        preloadedState: loadFromLocalStorage(),
        middleware: [...getDefaultMiddleware(), ...middlewares]
    })
}

export default configureStoreCreator