import * as actionType from '../Constants/actionTypes';

const AuthCrudReducer = (state = { posts: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALL_DATA:
            return {
                ...state,
                posts: action.payload,
            };
        case actionType.GET_DATA_BY_ID:
            return {
                ...state,
                post: action.payload
            }   
        default:
            return state;
    }
};

export default AuthCrudReducer;