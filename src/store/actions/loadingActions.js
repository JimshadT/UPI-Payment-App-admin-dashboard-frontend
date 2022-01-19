import { TOGGLE_LOADING } from '../types';

export const toggleLoading = data => {
  return async dispatch => {
    dispatch({ type: TOGGLE_LOADING, payload: data });
  };
};
