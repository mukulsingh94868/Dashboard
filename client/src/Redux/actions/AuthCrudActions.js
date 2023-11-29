// import toast from 'react-hot-toast';
import * as Api from '../../Network/Api';
import { GET_ALL_DATA, GET_DATA_BY_ID } from '../Constants/actionTypes';

export const getUserData = () => async (dispatch) => {
    try {
        const { data } = await Api.getData();
        dispatch({ type: GET_ALL_DATA, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = (id) => async (dispatch) => {
    try {
        const { data } = await Api.getDataId(id);
        console.log('data', data);
        dispatch({ type: GET_DATA_BY_ID, payload: data });
    } catch (error) {
        console.log(error);
    }
};