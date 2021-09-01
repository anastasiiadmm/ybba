import config from './config';
import {store} from './index.js';


const axios = require('axios');

const axiosApi = axios.create({
    baseURL: config.apiUrl
})

axiosApi.interceptors.request.use(async config => {
    const key = store.getState()?.user?.tokens?.access
    console.log(key)
    if (key) {
        config.headers = {
            ...config.headers,
            'Authorization': `Bearer ${key}`,
        }
    }
    return config
})

export default axiosApi