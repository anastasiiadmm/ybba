import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import lessonReducer from './lesson/lessonSlice'
import authReducer from './auth/authSlice'
import childReducer from './child/childSlice'
import lessonsReducer from './lessons/lessonsSlice'
import bashBoard from './dashBoard/dashBoardSlice'
import webSocket from './webSocker/webSockerSlice'
import surveys from './surveys/surveysSlice'
import payments from './payments/paymentsSlice'
import { getFromCookie, cookieMiddleware } from 'redux/utils/cookies.js';


const middlewares = [cookieMiddleware]

const configureStoreCreator = () => {
    return configureStore({
        reducer: {
            user: userReducer,
            lesson: lessonReducer,
            auth: authReducer,
            child: childReducer,
            lessons: lessonsReducer,
            dashBoard: bashBoard,
            webSocket: webSocket,
            surveys: surveys,
            payments: payments
        },
        preloadedState: getFromCookie(),
        middleware: [...getDefaultMiddleware(), ...middlewares]
    })
}

export default configureStoreCreator