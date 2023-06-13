import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://ieskaitesdarbs.onrender.com/api/',
    // baseURL: 'http://localhost:3001/api/',
})

export default axiosInstance
