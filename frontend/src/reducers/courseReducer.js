import { LIST_COURSE } from '../actions/types';

const initialState = {
  course: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LIST_COURSE:
        return {
            ...state,
            course: action.course
        }
        default: 
            return state;
    }
}