import * as actionType from '../Constants/actionTypes';

const productReducer = (state = { product: [] }, action) => {
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
        default:
            return state;
    }
};

export default productReducer;