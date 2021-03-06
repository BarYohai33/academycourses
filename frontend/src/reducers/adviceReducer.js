import { CREATE_ADVICE, LIST_ADVICE } from '../actions/types';

const initialState = {
  message: '',
  rating: 0,
  messages: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LIST_ADVICE:
        return {
            ...state,
            messages: action.messages
        }
        case CREATE_ADVICE:
            return {
                ...state,
                message: action.message,
                rating: action.rating
            }
        default: 
            return state;
    }
}