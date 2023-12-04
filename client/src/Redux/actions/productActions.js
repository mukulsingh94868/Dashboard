import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_BY_ID } from "../Constants/actionTypes";
import * as Api from '../../Network/Api';

export const getProductData = () => async (dispatch) => {
    try {
        const { data } = await Api.getProducts();
        dispatch({ type: GET_ALL_PRODUCT, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const getProductDataById = (id) => async (dispatch) => {
    try {
        const { data } = await Api.getProductsById(id);
        console.log('data', data);
        dispatch({ type: GET_ALL_PRODUCT_BY_ID, payload: data });
    } catch (error) {
        console.log(error);
    }
};