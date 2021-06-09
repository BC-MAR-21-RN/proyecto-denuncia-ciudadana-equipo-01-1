import {isValidEmail, isValidPassword} from './is';

import {getNewState} from './frontend';
import normalize from './normalize';
import {performGoogleAuth, performGoogleAuthSign} from './auth';
import {sortArrayByDate} from './sortArrayByDate';
import {dateFormatter} from './dateFormatter';
export {
  normalize,
  isValidEmail,
  isValidPassword,
  getNewState,
  performGoogleAuth,
  performGoogleAuthSign,
  sortArrayByDate,
  dateFormatter,
};
