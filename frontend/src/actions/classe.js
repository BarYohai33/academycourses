import axios from 'axios';
import { LIST_CLASSE } from './types';

export const getClasses = () => dispatch => {
  axios.get('http://localhost:5000/api/classe')
      .then(res => {
        dispatch(setClasse(res.data));
      })
      .catch(err => {
        console.log('error', err)
      });
}

export const setClasse = (classe) =>  {
  return {
      type: LIST_CLASSE,
      classe: classe
  }
}

