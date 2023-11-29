import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducers';
import AuthCrudReducer from './reducers/AuthCrudReducer';

const reducers = combineReducers({
    authReducer: authReducer,
    AuthCrudReducer: AuthCrudReducer
});

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk))
);

export default store;