import axios from 'axios';
import { CREATE_ADVICE } from './types';

export const createAdvice = (advice) => dispatch => {
  axios.post('http://localhost:5000/api/advice', { message: advice })
      .then(res => {
        dispatch({
            type: CREATE_ADVICE,
            message: advice
        });
      })
      .catch(err => {
        console.log('poture err', err)
      });
}