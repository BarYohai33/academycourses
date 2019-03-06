import axios from 'axios';
import { CREATE_ADVICE, LIST_ADVICE } from './types';

export const createAdvice = (advice, rating) => dispatch => {
  axios.post('http://localhost:5000/api/advice', { message: advice, rating})
      .then(res => {
        dispatch(setAdvice(advice, rating));
      })
      .catch(err => {
        console.log('error', err)
      });
}

export const getLastAdvice = () => dispatch => {
axios.get('http://localhost:5000/api/lastadvice')
    .then(res => {
      dispatch(setLastAdvice(res.data))
    })
    .catch(function (error) {
      console.log(error);
    })
}
  

export const setAdvice = (advice, rating) =>  {
  return {
      type: CREATE_ADVICE,
      message: advice,
      rating
  }
}

export const setLastAdvice = (advices) =>  {
  return {
      type: LIST_ADVICE,
      messages: advices,     
  }
}

