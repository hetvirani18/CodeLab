import axios from 'axios';

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
    withCredentials: true, // Include cookies in requests
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosClient;