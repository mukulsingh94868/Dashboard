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
export const changePassword = (formData) => API.post('/auth/change-password', formData);

// auth for the CRUD operations for the admin account for user-management
export const getData = () => API.get('/auth/getData');
export const getDataId = (id) => API.get(`/auth/getData/${id}`);

// product operations
export const getProducts = () => API.get('/product/products');
export const getProductsById = (id) => API.get(`/product/products/${id}`);

// orders operations
export const placedOrders = (formData) => API.post('/order/place-order', formData);
export const getOrders = () => API.get('/order/get-orders');











// todo operations
const API_NEW = "http://localhost:5000/api";

const getToken = () => localStorage.getItem('token');

// Fetch todos with filters
export const fetchTodos = async (userId, filters = {}) => {
    try {
        const token = JSON.parse(localStorage.getItem('authUser'));
        if (!token) throw new Error("No token found");

        const query = new URLSearchParams(filters).toString();
        const response = await axios.get(
            `${API_NEW}/todo/getTodo/${userId}${query ? `?${query}` : ''}`,
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;
    }
};

// Add a new todo
export const addTodo = async (todo) => {
    try {
        const token = JSON.parse(localStorage.getItem('authUser'));
        const userId = JSON.parse(localStorage.getItem('authId'));
        if (!token) throw new Error("No token found");

        const response = await axios.post(
            `${API_NEW}/todo/addTodo`,
            { ...todo, userId },
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error adding todo:", error);
        throw error;
    }
};

// Update an existing todo
export const updateTodo = async (id, updatedFields) => {
    try {
        const token = JSON.parse(localStorage.getItem('authUser'));
        if (!token) throw new Error("No token found");

        const response = await axios.put(
            `${API_NEW}/todo/updateTodo/${id}`,
            updatedFields,
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating todo:", error);
        throw error;
    }
};

// Delete a todo
export const deleteTodo = async (id) => {
    try {
        const token = JSON.parse(localStorage.getItem('authUser'));
        if (!token) throw new Error("No token found");

        const response = await axios.delete(
            `${API_NEW}/todo/deleteTodo/${id}`,
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error deleting todo:", error);
        throw error;
    }
};




// calender operations

// add calender
export const addCalenderEvent = async (event) => {
    try {
        const token = JSON.parse(localStorage.getItem('authUser'));
        const userId = JSON.parse(localStorage.getItem('authId'));
        if (!token) throw new Error("No token found");

        const response = await axios.post(
            `${API_NEW}/calender/events`,
            { ...event, userId },
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error adding event:", error);
        throw error;
    }
};

// get calender by userId
export const getCalenderEventByUserId = async (userId) => {
    try {
        const token = JSON.parse(localStorage.getItem('authUser'));
        if (!token) throw new Error("No token found");

        const response = await axios.get(
            `${API_NEW}/calender/events/${userId}`,
            {
                headers: {
                    Authorization: `${token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        throw error;
    }
};

// delete calender
export const deleteCalenderEvent = async (id) => {

};