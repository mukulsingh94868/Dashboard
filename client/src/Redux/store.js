import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducers';
import AuthCrudReducer from './reducers/AuthCrudReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';
import contactReducer from './reducers/contactReducer';

const reducers = combineReducers({
    authReducer: authReducer,
    AuthCrudReducer: AuthCrudReducer,
    productReducer: productReducer,
    orderReducer: orderReducer,
    contactReducer: contactReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
    productReducer: {
        cartItems: cartItems
    },
};

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;