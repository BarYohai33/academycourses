import { LIST_SLOT } from '../actions/types';

const initialState = {
  slot: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LIST_SLOT:
        return {
            ...state,
            slot: action.slot
        }
        default: 
            return state;
    }
}