import {CLEAN_AUTH, USER_AUTH, USER_LOGIN, USER_SIGN_UP} from './actionTypes';
import {error, request, success} from '../../../library/redux/baseActions';

import {authFirebase} from '../../../library/firebase';

export const doLogin = data => async dispatch => {
  const action = USER_LOGIN;
  dispatch(request(action));
  const response = await authFirebase.loginUserWithMail(data);
  if (response) {
    dispatch(success(action));
  } else {
    dispatch(error(action));
  }
  console.log('response', response);
  return;
};

export const signUp = data => async dispatch => {
  const action = USER_SIGN_UP;
  dispatch(request(action));
  const response = await authFirebase.createUserWithMail(data);

  if (response) {
    dispatch(success(action));
  } else {
    dispatch(error(action));
  }

  return;
};

export const googleAuthentication = () => async dispatch => {
  const action = USER_AUTH;
  dispatch(request(action));

  const response = authFirebase.authWithGoogle();
  if (response) {
    dispatch(success(action));
  } else {
    dispatch(error(action));
  }

  return;
};
export const cleanAuth = () => async dispatch => {
  const action = CLEAN_AUTH;
  console.log('cleaning auth');
  dispatch(success(action));

  return;
};
