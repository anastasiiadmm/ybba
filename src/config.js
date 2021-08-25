const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8000'

const config = {
    apiUrl,
    apiWsUrl: apiUrl.replace('http', 'ws'),
    frontendUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    appEnv: process.env.REACT_APP_ENV || 'prod',
    localStorageName: 'Ybba'
};

export default config;
