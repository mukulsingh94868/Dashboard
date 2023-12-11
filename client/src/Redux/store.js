import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducers';
import AuthCrudReducer from './reducers/AuthCrudReducer';
import productReducer from './reducers/productReducer';

const reducers = combineReducers({
    authReducer: authReducer,
    AuthCrudReducer: AuthCrudReducer,
    productReducer: productReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    productReducer: {
        cartItems: cartItems
    },
};

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;