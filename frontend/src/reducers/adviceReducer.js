// authReducer.js

import { CREATE_ADVICE } from '../actions/types';

const initialState = {
  message: ''
}

export default function(state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case CREATE_ADVICE:
            return {
                ...state,
                message: state.message
            }
        default: 
            return state;
    }
}