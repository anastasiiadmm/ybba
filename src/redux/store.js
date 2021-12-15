import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'redux/user/userSlice';
import lessonReducer from 'redux/lesson/lessonSlice';
import authReducer from 'redux/auth/authSlice';
import childReducer from 'redux/child/childSlice';
import lessonsReducer from 'redux/lessons/lessonsSlice';
import bashBoard from 'redux/dashBoard/dashBoardSlice';
import webSocket from 'redux/webSocker/webSockerSlice';
import surveys from 'redux/surveys/surveysSlice';
import payments from 'redux/payments/paymentsSlice';
import notificationsSlice from 'redux/notifications/notificationsSlice';
import { getFromCookie, cookieMiddleware } from 'redux/utils/cookies.js';

const middlewares = [cookieMiddleware];

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
      payments: payments,
      notifications: notificationsSlice,
    },
    preloadedState: getFromCookie(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
  });
};

export default configureStoreCreator;
