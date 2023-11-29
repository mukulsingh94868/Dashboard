import toast from 'react-hot-toast';
import * as Api from '../../Network/Api';
import { REGISTER, LOGIN, LOGOUT } from '../Constants/actionTypes';


// register
export const Register = (formData, navigate) => async (dispatch) => {
    try {
        const { data } = await Api.register(formData);
        console.log('data', data);
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
        console.error(error.message)
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


