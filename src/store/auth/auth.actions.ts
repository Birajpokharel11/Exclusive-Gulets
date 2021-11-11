import * as AuthType from './auth.types';

export const loadUserStart = (route) => ({
  type: AuthType.LOAD_USER_START,
  payload: route
});

export const loadUserSuccess = (currentUser) => ({
  type: AuthType.LOAD_USER_SUCCESS,
  payload: currentUser
});

export const loadUserFail = (error) => ({
  type: AuthType.LOAD_USER_FAILURE,
  payload: error
});

export const signinStart = (formData) => ({
  type: AuthType.SIGN_IN_START,
  payload: { formData }
});

export const signinSuccess = (currentUser) => ({
  type: AuthType.SIGN_IN_SUCCESS,
  payload: currentUser
});

export const signinFail = (error) => ({
  type: AuthType.SIGN_IN_FAILURE,
  payload: error
});

export const signupStart = (formData) => ({
  type: AuthType.SIGN_UP_START,
  payload: { formData }
});

export const signupSuccess = () => ({
  type: AuthType.SIGN_UP_SUCCESS
});

export const signupFail = (error) => ({
  type: AuthType.SIGN_UP_FAILURE,
  payload: error
});

export const signupBrokerStart = (formData) => ({
  type: AuthType.SIGN_UP_BROKER_START,
  payload: { formData }
});

export const signupBrokerSuccess = () => ({
  type: AuthType.SIGN_UP_BROKER_SUCCESS
});

export const signupBrokerFail = (error) => ({
  type: AuthType.SIGN_UP_BROKER_FAILURE,
  payload: error
});

export const signoutStart = (token) => ({
  type: AuthType.SIGN_OUT_START,
  payload: { token }
});

export const signoutSuccess = () => ({
  type: AuthType.SIGN_OUT_SUCCESS
});

export const signoutFail = (error) => ({
  type: AuthType.SIGN_OUT_FAILURE,
  payload: error
});

export const validateUserEmailStart = (formData) => ({
  type: AuthType.VALIDATE_USER_EMAIL_START,
  payload: { formData }
});

export const validateUserEmailSuccess = (data) => ({
  type: AuthType.VALIDATE_USER_EMAIL_SUCCESS,
  payload: data
});

export const validateUserEmailFail = (error) => ({
  type: AuthType.VALIDATE_USER_EMAIL_FAILURE,
  payload: error
});

export const verifyBrokerStart = (formData) => ({
  type: AuthType.VERIFY_BROKER_START,
  payload: { formData }
});

export const verifyBrokerSuccess = (data) => ({
  type: AuthType.VERIFY_BROKER_SUCCESS,
  payload: data
});

export const verifyBrokerFail = (error) => ({
  type: AuthType.VERIFY_BROKER_FAILURE,
  payload: error
});

export const clearErrorLog = () => ({
  type: AuthType.CLEAR_ERROR_LOG
});
