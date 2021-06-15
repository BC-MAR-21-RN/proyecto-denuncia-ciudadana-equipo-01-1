import {
  CLEAN_AUTH,
  USER_AUTH,
  USER_LOGIN,
  USER_SIGN_UP,
} from '../../../containers/Login/actions/actionTypes';

import {getNewState} from '../../methods';

const initialState = {
  message: '',
  error: '',
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN.request(): {
      return getNewState(state, {
        ...state,
        loading: true,
        message: 'Loading...',
      });
    }

    case USER_LOGIN.success(): {
      return getNewState(state, {
        ...state,
        loading: false,
        message: 'Login success',
      });
    }
    case USER_LOGIN.error(): {
      return getNewState(state, {
        ...state,
        error: true,
        loading: false,
        message: "Can't login verify your account",
      });
    }
    case USER_SIGN_UP.request(): {
      return getNewState(state, {
        ...state,
        loading: true,
        message: 'Loading...',
      });
    }

    case USER_SIGN_UP.success(): {
      return getNewState(state, {
        ...state,
        loading: false,
        message: 'Verify your acount by email',
      });
    }
    case USER_SIGN_UP.error(): {
      return getNewState(state, {
        ...state,
        error: true,
        loading: false,
        message: "Can't sign in your email couldn't be regristered",
      });
    }
    case USER_AUTH.request(): {
      return getNewState(state, {
        ...state,
        loading: true,
        message: 'Loading...',
      });
    }

    case USER_AUTH.success(): {
      return getNewState(state, {
        ...state,
        loading: false,
        message: 'Login success',
      });
    }
    case USER_AUTH.error(): {
      return getNewState(state, {
        ...state,
        error: true,
        loading: false,
        message: "Can't login",
      });
    }
    case CLEAN_AUTH.success(): {
      return getNewState(state, {
        ...initialState,
      });
    }
    default:
      return state;
  }
};
export default userReducer;
