import axios from 'axios';

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('authUser')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('authUser')).token}`;
    }
    return req;
});

// auth for the login and register
export const register = (formData) => API.post('/auth/register', formData);
export const login = (formData) => API.post('/auth/login', formData);

// auth for the CRUD operations for the admin account for user-management
export const getData = () => API.get('/auth/getData');
export const getDataId = (id) => API.get(`/auth/getData/${id}`);