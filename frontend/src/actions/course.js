import axios from 'axios';
import { LIST_COURSE, UPDATE_CURRENT_COURSE, CREATE_INVOICE } from './types';
import store from '../store';

export const getCourses = () => dispatch => {
  axios.get('http://localhost:5000/api/course')
      .then(res => {
        dispatch(setCourse(res.data));
      })
      .catch(err => {
        console.log('error', err)
      });
}

export const setCourse = (course) =>  {
  return {
      type: LIST_COURSE,
      course: course
  }
}

export const updateCurrentCourse = ({ classe, course, slot, price }) => {
  const currentCourse = store.getState().course.currentCourse
  currentCourse.classe = classe !== undefined ? classe : currentCourse.classe
  currentCourse.course = course !== undefined ? course : currentCourse.course
  currentCourse.slot = slot !== undefined ? slot : currentCourse.slot
  currentCourse.price = price !== undefined ? price : currentCourse.price
  return {
    type: UPDATE_CURRENT_COURSE,
    currentCourse
  }
}

export const setInvoice = (invoice) => {
  return {
    type: CREATE_INVOICE,
    invoice: invoice
  }
}

export const createInvoice = () => {
  axios.post('http://localhost:5000/api/invoice', { ...store.getState().course.currentCourse })
  .then(res => {
    console.log(res.data)
  })
  .catch(err => {
    console.log('error', err)
  });
}
