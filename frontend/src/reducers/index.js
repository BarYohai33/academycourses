// index.js

import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adviceReducer from './adviceReducer';
import classeReducer from './classeReducer';
import courseReducer from './courseReducer';
import slotReducer from './slotReducer';

export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    advice: adviceReducer,
    classe: classeReducer,
    course: courseReducer,
    slot: slotReducer
});