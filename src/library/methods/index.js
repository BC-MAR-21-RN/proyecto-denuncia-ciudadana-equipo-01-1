import {isValidEmail, isValidPassword} from './is';

import {getNewState} from './frontend';
import normalize from './normalize';
import {performGoogleAuth} from './auth';

export {
  performGoogleAuth,
  normalize,
  isValidEmail,
  isValidPassword,
  getNewState,
};
