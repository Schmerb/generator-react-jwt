import { setLocalItem } from 'utils/storage';
import { setCookie } from 'utils/cookies';

import { setAuthToken } from 'actions/auth';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});

export const CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
export const clearCurrentUser = () => ({
  type: CLEAR_CURRENT_USER,
});

export const clearUserState = () => dispatch => {
  dispatch(clearCurrentUser());
  dispatch(setAuthToken(null));
  setLocalItem('authToken', null);
  setCookie('rememberMe', false); // reset rememberMe cookie
};
