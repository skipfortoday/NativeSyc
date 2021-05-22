import { FETCH_ALL_DATA } from '../constants/app';

const initialState = {
  data: []
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      status == 403 
      return {
        data: action.data
      }
    default:
      return state;
  }
}