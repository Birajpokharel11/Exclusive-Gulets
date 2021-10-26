import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import * as AuthType from './auth.types';
import * as authActions from './auth.actions';
import { signupStart, signinStart } from './auth.actions';

export function* loadUserAsync() {
  try {
  } catch (err) {
    console.error(err);
  }
}

export function* onSigninAsync({
  payload: { formData }
}: ReturnType<typeof signinStart>) {
  try {
    console.log('data in signIn>>>', formData);
    const { data } = yield axios.post(
      `https://app.exclusivegulets.com/api/v1/users/signin`,
      formData
    );
    console.log('value fo data after success>>>', data);

    yield put(authActions.signinSuccess(data));
  } catch (err) {
    console.error('error received onSigninAsync>>>', err);
    yield put(authActions.signinFail(err));
  }
}

export function* onSignupAsync({
  payload: { formData }
}: ReturnType<typeof signupStart>) {
  try {
    const { data } = yield axios.post(
      `http://yatchcloud-dev.fghire.com/api/public/createManager`,
      formData
    );

    console.log('value fo data after success>>>', data);
    yield put(authActions.signupSuccess());
  } catch (err) {
    console.error('error received onSignupAsync>>>', err);
    yield put(authActions.signupFail(err));
  }
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
