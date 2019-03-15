import axios from 'axios';
import { LIST_COURSE } from './types';

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

