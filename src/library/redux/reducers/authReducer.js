import {
  USER_AUTH,
  USER_LOGIN,
  USER_SIGN_UP,
} from '../../../containers/Login/actions/actionTypes';

import {getNewState} from '../../methods';

const initialState = {
  user: {},
  error: '',
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN.request(): {
      return getNewState(state, {
        ...state,
        loading: true,
      });
    }

    case USER_LOGIN.success(): {
      const {payload} = action;

      return getNewState(state, {
        ...state,
        user: payload,
        loading: false,
      });
    }
    case USER_LOGIN.error(): {
      const {payload} = action;

      return getNewState(state, {
        ...state,
        error: payload,
        loading: false,
      });
    }
    case USER_SIGN_UP.request(): {
      return getNewState(state, {
        ...state,
        loading: true,
      });
    }

    case USER_SIGN_UP.success(): {
      const {payload} = action;

      return getNewState(state, {
        ...state,
        user: payload,
        loading: false,
      });
    }
    case USER_SIGN_UP.error(): {
      const {payload} = action;

      return getNewState(state, {
        ...state,
        error: payload,
        loading: false,
      });
    }
    case USER_AUTH.request(): {
      return getNewState(state, {
        ...state,
        loading: true,
      });
    }

    case USER_AUTH.success(): {
      const {payload} = action;

      return getNewState(state, {
        ...state,
        user: payload,
        loading: false,
      });
    }
    case USER_AUTH.error(): {
      const {payload} = action;

      return getNewState(state, {
        ...state,
        error: payload,
        loading: false,
      });
    }
    default:
      return state;
  }
};
export default userReducer;
