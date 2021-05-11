import {USER_LOGIN} from '../../../containers/Login/actions/actionTypes';

const initialState = {
  user: {},
  error: '',
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN.request(): {
      return {
        ...state,
        loading: true,
      };
    }
    case USER_LOGIN.success(): {
      const {payload} = action;

      return {
        ...state,
        user: payload,
        loading: false,
      };
    }
    case USER_LOGIN.error(): {
      const {payload} = action;

      return {
        ...state,
        error: payload,
        loading: false,
      };
    }
    default:
      return state;
  }
};
export default userReducer;
