import { GET_ALL_PRODUCT, GET_ALL_PRODUCT_BY_ID, ADD_TO_CART } from "../Constants/actionTypes";
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
        dispatch({ type: GET_ALL_PRODUCT_BY_ID, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const addToCart = (product, quantity, varient) => async (dispatch, getState) => {
    try {
        const { data } = await Api.postAddToCart(product, quantity, varient);
        console.log('data added to cart', data);
        dispatch({ type: ADD_TO_CART, payload: data });
    } catch (error) {
        console.log(error);
    }
};