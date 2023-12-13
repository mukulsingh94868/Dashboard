import * as actionType from '../Constants/actionTypes';

const orderReducer = (state = { orders: [] }, action) => {
    switch (action.type) {
        case actionType.ORDER_PLACED:
            return {
                ...state,
                orders: action.payload
            };    
        default:
            return state;
    }
};

export default orderReducer;