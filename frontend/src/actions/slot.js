import axios from 'axios';
import { LIST_SLOT } from './types';

export const getSlots = () => dispatch => {
  axios.get('http://localhost:5000/api/slot')
      .then(res => {
        dispatch(setSlot(res.data));
      })
      .catch(err => {
        console.log('error', err)
      });
}

export const setSlot = (slot) =>  {
  return {
      type: LIST_SLOT,
      slot: slot
  }
}
