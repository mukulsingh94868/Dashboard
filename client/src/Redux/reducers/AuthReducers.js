import * as actionType from '../Constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {
    switch (action.type) {
        case actionType.REGISTER:
            return {
                ...state,
                authData: action.data,
                loading: false,
                errors: null
            };

        case actionType.LOGIN:
            // localStorage.setItem('authUser', JSON.stringify({ ...action?.data }));
            localStorage.setItem('authUser', JSON.stringify(action?.data?.token));
            localStorage.setItem('authPerson', JSON.stringify(action?.data?.data?.role));
            localStorage.setItem('authFullName', JSON.stringify(action?.data?.data?.fullname));
            return { ...state, authData: action.data, loading: false, errors: null };

        case actionType.LOGOUT:
            localStorage.clear();
            // localStorage.removeItem('authUser');
            // localStorage.removeItem('authPerson');
            // localStorage.removeItem('authFullName');
            return { ...state, authData: null, loading: false, errors: null };
        default:
            return state;
    }
};

export default authReducer;