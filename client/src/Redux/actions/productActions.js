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

// export const addToCart = (product, quantity, varient) => async (dispatch, getState) => {
//     try {
//         const { data } = await Api.postAddToCart(product, quantity, varient);
//         console.log('data added to cart', data);
//         dispatch({ type: ADD_TO_CART, payload: data });
//     } catch (error) {
//         console.log(error);
//     }
// };

export const addToCart = (product, quantity, varient) => async (dispatch, getState) => {
    var cardItem = {
        name: product?.name,
        _id: product?._id,
        image: product?.image,
        varient: varient,
        quantity: Number(quantity),
        prices: product?.prices,
        price: product?.prices[0][varient] * quantity
    };

    if (cardItem?.quantity > 10) {
        alert('You cannot add more than 10 items');
    } else {
        if (cardItem?.quantity < 1) {
            dispatch({
                type: 'DELETE_FROM_CART',
                payload: product
            });
        } else {
            dispatch({
                type: ADD_TO_CART,
                payload: cardItem
            });
        }
    }
    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteFromCart = (pizza) => async (dispatch, getState) => {
    dispatch({
        type: 'DELETE_FROM_CART',
        payload: pizza
    });

    const cartItems = getState().cartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
};