import config from "./config";

const axios = require("axios");


const axiosApi = axios.create({
    baseURL: config.apiUrl + '/api/v1/'
})

export default axiosApi