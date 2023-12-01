import { GET_ALL_PRODUCT } from "../Constants/actionTypes";
import * as Api from '../../Network/Api';

export const getProductData = () => async (dispatch) => {
    try {
        const { data } = await Api.getProducts();
        dispatch({ type: GET_ALL_PRODUCT, payload: data });
    } catch (error) {
        console.log(error);
    }
};