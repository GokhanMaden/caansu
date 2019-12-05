import { GET_TODO_LIST } from '../constants';

export default function(state=[], action) {
  switch(action.type) {
    case GET_TODO_LIST:
      console.log('action.payload: ', action.payload);
      return {...state, data: action.payload}
    default:
      return state;
  }
}

//ADD_BRAND'i action payload'u action'ı ile incele TODO