import { takeLatest, call, all } from 'redux-saga/effects';

import * as AuthType from './auth.types';

export function* loadUserAsync() {
  try {
  } catch (err) {
    console.error(err);
  }
}

export function* onSigninAsync() {
  try {
  } catch (err) {
    console.error(err);
  }
}

export function* onSignupAsync() {
  try {
  } catch (err) {}
}

export function* signOutAsync() {
  try {
  } catch (err) {}
}

export function* watchLoadUser() {
  yield takeLatest(AuthType.LOAD_USER_START, loadUserAsync);
}

export function* watchSignin() {
  yield takeLatest(AuthType.SIGN_IN_START, onSigninAsync);
}

export function* watchSignup() {
  yield takeLatest(AuthType.SIGN_UP_START, onSignupAsync);
}

export function* watchSignout() {
  yield takeLatest(AuthType.SIGN_OUT_START, signOutAsync);
}

export function* authSagas() {
  yield all([
    call(watchSignin),

    call(watchSignup),
    call(watchSignout),
    call(watchLoadUser)
  ]);
}
