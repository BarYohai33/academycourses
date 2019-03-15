import { LIST_CLASSE } from '../actions/types';

const initialState = {
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LIST_CLASSE:
        return {
            ...state,
            classe: action.classe
        }
        default: 
            return state;
    }
}