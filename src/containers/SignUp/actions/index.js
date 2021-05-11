import {error, request, success} from '../../../library/redux/baseActions';

import {USER_SIGN_UP} from './actionTypes';
import {performGoogleAuthSign} from '../../../library/methods';

export const doSignUp = () => async dispatch => {
  const action = USER_SIGN_UP;
  dispatch(request(action));
  const response = await performGoogleAuthSign();
  if (response.user.uid) {
    dispatch(success(action, response));
    return response;
  } else {
    dispatch(error(action, response));
    return response;
  }
};
