import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://192.168.15.26:3333'
});

export default api;