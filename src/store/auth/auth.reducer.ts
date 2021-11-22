import { HYDRATE } from 'next-redux-wrapper';

import * as AuthType from './auth.types';

import { IAuthState } from '../interfaces';

const INITIAL_STATE: IAuthState = {
  token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  isAuthenticated: null,
  currentUser: {},
  newUser: {},
  error: null,
  loading: false,
  isEditing: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.auth };

    case AuthType.SIGN_IN_START:
    case AuthType.SIGN_UP_START:
    case AuthType.SIGN_UP_BROKER_START:
    case AuthType.LOAD_USER_START:
    case AuthType.VALIDATE_USER_EMAIL_START:
    case AuthType.VERIFY_BROKER_START:
      return {
        ...state,
        loading: true
      };

    case AuthType.SIGN_IN_SUCCESS:
      localStorage.setItem('token', payload.access_token);
      localStorage.setItem('refresh_token', payload.refresh_token);
      localStorage.setItem('expires_in', payload.expires_in);
      return {
        ...state,
        ...payload,
        token: payload.access_token,
        isAuthenticated: true,
        loading: false
      };

    case AuthType.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        currentUser: payload
      };

    case AuthType.SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case AuthType.VERIFY_BROKER_SUCCESS:
      return {
        ...state,
        loading: false
      };

    case AuthType.SIGN_UP_BROKER_SUCCESS:
    case AuthType.VALIDATE_USER_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        validateUserData: payload
      };

    case AuthType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: null,
        token: null,
        currentUser: {},
        error: null
      };

    case AuthType.LOAD_USER_FAILURE:
    case AuthType.SIGN_IN_FAILURE:
    case AuthType.SIGN_UP_FAILURE:
    case AuthType.SIGN_UP_BROKER_FAILURE:
    case AuthType.SIGN_OUT_FAILURE:
    case AuthType.VALIDATE_USER_EMAIL_FAILURE:
    case AuthType.VERIFY_BROKER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case AuthType.EDIT_BROKER_PROFILE_START:
      return {
        ...state,
        isEditing: true
      };

    case AuthType.EDIT_BROKER_PROFILE_SUCCESS:
      console.log('EDIT_BROKER_PROFILE_SUCCESS>>>', payload);
      return {
        ...state,
        isEditing: false,
        currentUser: {
          ...state.currentUser,
          firstName: payload.firstName,
          lastName: payload.lastName,
          phoneNumber: payload.phoneNumber
        }
      };

    case AuthType.EDIT_BROKER_PROFILE_FAILURE:
      return {
        ...state,
        isEditing: false
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
