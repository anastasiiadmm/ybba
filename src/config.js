
const {
    REACT_APP_API_URL, REACT_APP_SENTRY_DSN, REACT_APP_ENVIRONMENT
} = process.env

const apiUrl = REACT_APP_API_URL || 'http://localhost:8000'
const frontendUrl = REACT_APP_API_URL || 'http://localhost:3000'
const sentryDSN = REACT_APP_SENTRY_DSN || ''
const appEnvironment = REACT_APP_ENVIRONMENT || 'local'

const config = {
    apiUrl,
    frontendUrl,
    sentryDSN,
    appEnvironment,
    localStorageName: 'Ybba',
    registrationParentLocalStorageName: 'parentRegistration',
    registrationChildLocalStorageName: 'childRegistration'
};

export const defaultError = {detail: 'На сервере что-то пошло не так'}

export default config;
