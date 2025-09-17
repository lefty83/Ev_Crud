import axios from 'axios';

const token = JSON.parse(localStorage.getItem('user')) || '';

export const apiClient = axios.create({
    baseURL: '',
    headers: {
        "Authorization": token.token
    }
});

// apiClient.interceptors.request.use(config => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user?.token) {
//         config.headers.Authorization = user.token;
//     }
//     return config;
// });