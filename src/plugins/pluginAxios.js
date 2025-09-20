import axios from 'axios';

const token = JSON.parse(localStorage.getItem('store')) || '';

export const apiClient = axios.create({
    baseURL: '',
    headers: {
        "Authorization": token.token
    }
});
