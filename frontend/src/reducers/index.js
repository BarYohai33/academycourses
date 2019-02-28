// index.js

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adviceReducer from './adviceReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    advice: adviceReducer
});