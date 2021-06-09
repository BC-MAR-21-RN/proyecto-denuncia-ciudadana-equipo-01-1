import {USER_AUTH, USER_LOGIN, USER_SIGN_UP} from './actionTypes';
import {error, request, success} from '../../../library/redux/baseActions';
import {loginUserWithMail, performGoogleAuth} from '../../../library/methods';
import {authFirebase} from '../../../library/firebase';

import auth from '@react-native-firebase/auth';

export const doLogin = data => async dispatch => {
  const action = USER_LOGIN;
  dispatch(request(action));
  return await authFirebase
    .loginUserWithMail(data)
    .then(resp => console.log('bienjjjj', resp))
    .catch(errorRequest => console.log('error', errorRequest));

  // const response = await loginUserWithMail();
  // if (response.user.uid) {
  //   dispatch(success(action, response));
  //   return response;
  // } else {
  //   dispatch(error(action, response));
  //   return response;
  // }
};

export const signUp = data => async dispatch => {
  const action = USER_SIGN_UP;
  dispatch(request(action));
  return await authFirebase
    .createUserWithMail(data)
    .then(res => {
      console.log('Creado en firestore', res);
      return res;
    })
    .catch(error => {
      console.log(
        'Algo salió mal, viejo. Revisa a ver e intenta de nuevo jaja',
        error,
      );
      return error;
    });
};

export const googleAuthentication = () => async dispatch => {
  const action = USER_AUTH;
  dispatch(request(action));
  return authFirebase
    .authWithGoogle()
    .then(res => {
      console.log('Logeando en firestore', res);
      return res;
    })
    .catch(error => {
      console.log(
        'Algo salió mal, viejo. Revisa a ver e intenta de nuevo jaja',
        error,
      );
      return error;
    });
};
