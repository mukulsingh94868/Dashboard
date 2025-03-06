import * as actionType from '../Constants/actionTypes';

const initialState = {
    contact: [],
};

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.GET_ALL_CONTACT:
            return {
                ...state,
                contact: action.payload,
            };
        case actionType.CONTACT_SUBMIT:
            return {
                ...state,
                contact: action.payload
            }
        default:
            return state;
    }
};

export default contactReducer;