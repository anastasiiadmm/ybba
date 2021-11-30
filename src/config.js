import { apiUrls, wsUrls } from 'constants.js';


const {
    REACT_APP_SENTRY_DSN, REACT_APP_ENVIRONMENT, REACT_APP_ROBOKASSA_MERCHANT_LOGIN, REACT_APP_ROBOKASSA_PASSWORD,
    REACT_APP_FIREBASE_VAPID_KEY
} = process.env

const appEnvironment = REACT_APP_ENVIRONMENT || 'local'
const apiUrl = apiUrls[appEnvironment]
const wsUrl = wsUrls[appEnvironment]
const sentryDSN = REACT_APP_SENTRY_DSN || ''
const robocassa_merchant_login = REACT_APP_ROBOKASSA_MERCHANT_LOGIN || null
const robocassa_password = REACT_APP_ROBOKASSA_PASSWORD || null
const firebaseVapidKey = REACT_APP_FIREBASE_VAPID_KEY || null

const config = {
    apiUrl,
    wsUrl,
    sentryDSN,
    appEnvironment,
    localStorageName: 'Ybba',
    robocassa_password,
    robocassa_merchant_login,
    registrationParentLocalStorageName: 'parentRegistration',
    registrationChildLocalStorageName: 'childRegistration',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'H:mm:ss',
    firebaseVapidKey
};

export const unauthorized401 = 401

export const defaultError = { detail: 'На сервере что-то пошло не так' }

export default config;
