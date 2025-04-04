import * as Api from '../../Network/Api';
import { GET_ALL_ORDERS, GET_ALL_ORDERS_BY_USERID, ORDER_PLACED } from '../Constants/actionTypes';

export const PlacedOrderData = (token, subtotal) => async (dispatch, getState) => {
    try {
        const cartItems = getState()?.productReducer?.cartItems;
        const { data } = await Api.placedOrders({ token, subtotal, cartItems });
        dispatch({ type: ORDER_PLACED, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const GetAllOrdersData = () => async (dispatch) => {
    try {
        // const { data } = await Api.getProducts();
        const { data } = await Api.getOrders();
        dispatch({ type: GET_ALL_ORDERS, payload: data });
    } catch (error) {
        console.log(error);
    }
};

export const GetAllOrdersDataByUserId = (userId) => async (dispatch) => {
    try {
        const { orders } = await Api.getOrdersByUserId(userId);
        dispatch({ type: GET_ALL_ORDERS_BY_USERID, payload: orders });
    } catch (error) {
        console.log(error);
    }
};
