import {currentPosition, getDriection} from './mapsGeo';
import {isValidEmail, isValidPassword} from './is';
import {performGoogleAuth, performGoogleAuthSign} from './performAuth';

import {dateFormatter} from './dateFormatter';
import {getNewState} from './frontend';
import normalize from './normalize';
import {sortArrayByDate} from './sortArrayByDate';

export {
  normalize,
  isValidEmail,
  isValidPassword,
  getNewState,
  performGoogleAuth,
  performGoogleAuthSign,
  currentPosition,
  getDriection,
  sortArrayByDate,
  dateFormatter,
};
