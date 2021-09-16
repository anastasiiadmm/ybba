import axios from 'axios';

import config, {unauthorized401} from './config';
import {store} from './index.js';
import {refreshToken} from './redux/auth/authSlice';


const axiosApi = axios.create({
    baseURL: config.apiUrl
})

axiosApi.interceptors.request.use(async config => {
    const key = store.getState()?.auth?.tokens?.access
    if (key) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${key}`,
        }
    }
    return config
})

axiosApi.interceptors.response.use(async config => {
    return config
}, async error => {
    const originalRequest = error.config;

    const statusCode = error?.response?.status
    const user = store.getState().auth.user

    if (user && (!statusCode || statusCode === unauthorized401)) {
        originalRequest._retry = true
        await store.dispatch(refreshToken())

        const newAccessToken = store.getState().auth.tokens.access
        axiosApi.defaults.headers['Authorization'] = `Bearer ${newAccessToken()}`

        return axiosApi(originalRequest)
    }

    return Promise.reject(error)
})

export default axiosApi