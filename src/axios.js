import axios from 'axios';

import config from './config';
import {store} from './index.js';


const axiosApi = axios.create({
    baseURL: config.apiUrl
})

axiosApi.interceptors.request.use(async config => {
    const key = store.getState()?.user?.tokens?.access
    if (key) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${key}`,
        }
    }
    return config
})

export default axiosApi