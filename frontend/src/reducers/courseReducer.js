import { LIST_COURSE, UPDATE_CURRENT_COURSE } from '../actions/types';

const initialState = {
  course: [],
  currentCourse: {}
}

export default function(state = initialState, action) {
    console.log('inRed', state)
    switch(action.type) {
        case LIST_COURSE:
        return {
            ...state,
            course: action.course
        }
        case UPDATE_CURRENT_COURSE:
        return {
            ...state,
            currentCourse: { ...state.course.currentCourse, ...action.currentCourse }
        }
        default: 
            return state;
    }
}