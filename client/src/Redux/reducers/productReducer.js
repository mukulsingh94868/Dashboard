import * as actionType from '../Constants/actionTypes';

const productReducer = (state = { product: [], cartItems: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_PRODUCT:
            return {
                ...state,
                product: action.payload,
            }; 
        case actionType.GET_ALL_PRODUCT_BY_ID:
            return {
                ...state,
                product: action.payload
            }    
        case actionType.ADD_TO_CART:
            const alreadyExist = state.cartItems.find((item) => item._id === action.payload._id);
            if (alreadyExist) {
                return {
                    ...state,
                    cartItems: state.cartItems?.map((item) => item?._id === action.payload._id ? action.payload : item)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, action.payload]
                }
            }   
        case actionType.DELETE_FROM_CART:
            return {
                ...state,
                cartItems: state?.cartItems?.filter((item) => item?._id !== action?.payload?._id)
            }    
        case actionType.EMPTY_CART:
            return {
                ...state,
                cartItems: []
            }    
        default:
            return state;
    }
};

export default productReducer;