import {USER_AUTH, USER_LOGIN, USER_SIGN_UP} from './actionTypes';
import {error, request, success} from '../../../library/redux/baseActions';
import {loginUserWithMail, performGoogleAuth,} from '../../../library/methods';

import auth from '@react-native-firebase/auth';

export const doLogin = data => async dispatch => {
  const action = USER_LOGIN;
  dispatch(request(action));

  console.log('IS LOGIN AND THIS IS THE DATA', data);
  const response = await loginUserWithMail();
  if (response.user.uid) {
    dispatch(success(action, response));
    return response;
  } else {
    dispatch(error(action, response));
    return response;
  }
};

export const signUp = data => async dispatch => {
  const action = USER_SIGN_UP;
  dispatch(request(action));
  console.log('IS SIGN UP AND THIS IS THE DATA', data);
};

export const googleAuthentication = () => async dispatch => {
  const action = USER_AUTH;
  dispatch(request(action));
  console.log('DOING AUTHENTICATION');
    /* const response = await performGoogleAuth();
  if (response.user.uid) {
    dispatch(success(action, response));
    return response;
  } else {
    dispatch(error(action, response));
    return response;
  }*/
};
