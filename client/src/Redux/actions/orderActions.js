import * as Api from '../../Network/Api';
import { ORDER_PLACED } from '../Constants/actionTypes';

export const PlacedOrderData = (token, subtotal) => async (dispatch, getState) => {
    try {
        const cartItems = getState()?.productReducer?.cartItems;
        const { data } = await Api.placedOrders({ token, subtotal, cartItems });
        dispatch({ type: ORDER_PLACED, payload: data });
    } catch (error) {
        console.log(error);
    }
}