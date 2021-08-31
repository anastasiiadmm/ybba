const apiUrl = process.env.API_URL || 'http://localhost:8000'

const config = {
    apiUrl,
    apiWsUrl: apiUrl.replace('http', 'ws'),
    frontendUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    appEnv: process.env.REACT_APP_ENV || 'prod',
    localStorageName: 'Ybba',
    registrationParentLocalStorageName: 'parentRegistration',
    registrationChildLocalStorageName: 'childRegistration'
};

export const defaultError = {default: 'На сервере что-то пошло не так'}

export default config;
