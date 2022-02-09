import { combineReducers } from 'redux';
import userReducer from './userReducer.js';
import navReducer from './navReducer.js';

const reducers  =combineReducers({
    user : userReducer,
    nav : navReducer
});

export default reducers;