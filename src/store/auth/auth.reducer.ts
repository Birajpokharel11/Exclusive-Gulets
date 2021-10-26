import { HYDRATE } from 'next-redux-wrapper';

import * as AuthType from './auth.types';

import { IAuthState } from '../interfaces';

const INITIAL_STATE: IAuthState = {
  isAuthenticated: null,
  currentUser: {},
  newUser: {},
  error: null,
  loading: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.auth };

    case AuthType.SIGN_IN_START:
    case AuthType.SIGN_UP_START:
    case AuthType.LOAD_USER_START:
      return {
        ...state,
        loading: true
      };

    case AuthType.SIGN_IN_SUCCESS:
    case AuthType.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: payload,
        loading: false
      };

    case AuthType.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case AuthType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: null,
        currentUser: {},
        error: null
      };

    case AuthType.LOAD_USER_FAILURE:
    case AuthType.SIGN_IN_FAILURE:
    case AuthType.SIGN_UP_FAILURE:
    case AuthType.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case AuthType.CLEAR_ERROR_LOG:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};

export default authReducer;
