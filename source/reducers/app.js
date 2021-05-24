import { FETCH_ALL_DATA } from '../constants/app';

const initialState = {
  getDataUser: false,
  test: false
}

export const app = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        getDataUser: action.data
      }
    default:
      return state;
  }
}