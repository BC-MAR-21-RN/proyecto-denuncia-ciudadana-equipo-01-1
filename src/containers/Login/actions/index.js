import {error, request, success} from '../../../library/redux/baseActions';

import {USER_LOGIN} from './actionTypes';
import {performGoogleAuth} from '../../../library/methods';

export const doLogin = () => async dispatch => {
  const action = USER_LOGIN;
  dispatch(request(action));
  const response = await performGoogleAuth();
  if (response.user.uid) {
    dispatch(success(action, response));
    return response;
  } else {
    dispatch(error(action, response));
    return response;
  }
};
