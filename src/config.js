
const {
    REACT_APP_API_URL, REACT_APP_SENTRY_DSN, REACT_APP_ENVIRONMENT, REACT_APP_WS_URL,
    REACT_APP_ROBOKASSA_MERCHANT_LOGIN, REACT_APP_ROBOKASSA_PASSWORD
} = process.env

const apiUrl = REACT_APP_API_URL || 'http://localhost:8000'
const frontendUrl = REACT_APP_API_URL || 'http://localhost:3000'
const wsUrl = REACT_APP_WS_URL || 'ws://localhost:8000/ws'
const sentryDSN = REACT_APP_SENTRY_DSN || ''
const appEnvironment = REACT_APP_ENVIRONMENT || 'local'
const robocassa_merchant_login = REACT_APP_ROBOKASSA_MERCHANT_LOGIN || null
const robocassa_password = REACT_APP_ROBOKASSA_PASSWORD || null

const config = {
    apiUrl,
    frontendUrl,
    wsUrl,
    sentryDSN,
    appEnvironment,
    localStorageName: 'Ybba',
    robocassa_password,
    robocassa_merchant_login,
    registrationParentLocalStorageName: 'parentRegistration',
    registrationChildLocalStorageName: 'childRegistration',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'H:mm:ss'
};

export const unauthorized401 = 401

export const defaultError = {detail: 'На сервере что-то пошло не так'}

export default config;
