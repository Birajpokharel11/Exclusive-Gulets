import * as AuthType from './auth.types';

import { IAuthState } from '../interfaces';

const INITIAL_STATE: IAuthState = {
  access_token:
    typeof window !== 'undefined' ? localStorage.getItem('access_token') : null,
  isAuthenticated: null,
  currentUser: {},
  uploading: false,
  newUser: {},
  error: null,
  loading: true,
  isEditing: false
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
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
      localStorage.setItem('access_token', payload.access_token);
      localStorage.setItem('refresh_token', payload.refresh_token);
      localStorage.setItem('expires_in', payload.expires_in);
      return {
        ...state,
        ...payload,
        access_token: payload.access_token,
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
          ...payload
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

    case AuthType.UPLOAD_POST_START:
      return {
        ...state,
        uploading: true
      };

    case AuthType.UPLOAD_POST_SUCCESS:
      return {
        ...state,
        uploading: false
        // soleBlog: {
        //   ...state.soleBlog,
        //   [payload.imgCode]: payload.key
        // }
      };

    case AuthType.UPLOAD_POST_FAILURE:
      return {
        ...state,
        uploading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default authReducer;
