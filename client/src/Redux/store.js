import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/AuthReducers';

const reducers = combineReducers({
    authReducer: authReducer
});

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(thunk))
);

export default store;