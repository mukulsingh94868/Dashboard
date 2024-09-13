import toast from 'react-hot-toast';
import * as Api from '../../Network/Api';
import { REGISTER, LOGIN, LOGOUT, CHANGE_PASSWORD } from '../Constants/actionTypes';


// register
export const Register = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await Api.register(formData);
        dispatch({ type: REGISTER, data });
        toast.success('Successfully Register!', { duration: 2000, position: 'top-right' });
        navigate('/login');
    } catch (error) {
        console.error(error.message)
    }
};


// login
export const Login = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await Api.login(formData);
        dispatch({ type: LOGIN, data });
        toast.success('Successfully Login!', { duration: 2000, position: 'top-right' });
        navigate('/dashboard');
    } catch (error) {
        console.error('error', error)
    }
};

//logout
export const Logout = (navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOGOUT });
        toast.success('Successfully Logout!', { duration: 2000, position: 'top-right' });
        navigate('/login');
    } catch (error) {
        console.error(error.message)
    }
};

//change password
export const ChangePasswords = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await Api.changePassword(formData);
        dispatch({ type: CHANGE_PASSWORD, payload: data });
        toast.success(data.message, {
            duration: 2000,
            position: 'top-right'
        })
    } catch (error) {
        console.error('error', error);
    }
};


