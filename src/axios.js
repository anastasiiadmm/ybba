import axios from 'axios';

import config, {unauthorized401} from './config';
import {store} from './index.js';
import {refreshAccessToken, logoutUser} from './redux/auth/authSlice';


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
    const {user, tokens} = store.getState().auth

    if (user && (!statusCode || statusCode === unauthorized401)) {
        originalRequest._retry = true
        const resp = await axiosApi.post('/accounts/refresh/', {refresh: tokens.refresh})

        if (resp.status === 200) {
            const newTokens = resp.data
            console.log(resp.data)
            axiosApi.defaults.headers['Authorization'] = `Bearer ${newTokens.access}`

            store.dispatch(refreshAccessToken(newTokens))

            console.log(originalRequest)

            return axiosApi(originalRequest)
        }

        store.dispatch(logoutUser())
    }

    return Promise.reject(error)
})

export default axiosApi