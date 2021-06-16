import {CLEAN_AUTH, USER_AUTH, USER_LOGIN, USER_SIGN_UP} from './actionTypes';
import {error, request, success} from '../../../library/redux/baseActions';

import auth from '@react-native-firebase/auth';
import {authFirebase} from '../../../library/firebase';

export const doLogin = data => async dispatch => {
  const action = USER_LOGIN;
  dispatch(request(action));
  const response = await authFirebase.loginUserWithMail(data);
  console.log(auth().currentUser);
  if (response) {
    if (auth().currentUser.emailVerified) {
      dispatch(success(action));
    } else {
      authFirebase.logoutFirebase();
      dispatch(error(action));
    }
  } else {
    dispatch(error(action));
    clean(dispatch, CLEAN_AUTH);
  }
  return;
};

export const signUp = data => async dispatch => {
  const action = USER_SIGN_UP;

  dispatch(request(action));
  const response = await authFirebase.createUserWithMail(data);
  console.log(auth().currentUser);

  if (response) {
    dispatch(success(action));
  } else {
    dispatch(error(action));
  }
  clean(dispatch, CLEAN_AUTH);
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
  clean(dispatch, action);
};

const clean = (dispatch, action) => {
  setTimeout(() => {
    console.log('CLEANING');
    dispatch(success(action));
  }, 2000);
};
