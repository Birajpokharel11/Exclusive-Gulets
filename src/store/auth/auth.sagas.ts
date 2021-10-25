import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';

import * as AuthType from './auth.types';
import * as authActions from './auth.actions';
import { signupStart } from './auth.actions';

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

export function* onSignupAsync({
  payload: { formData }
}: ReturnType<typeof signupStart>) {
  console.log('inside of saga>>>', formData);
  try {
    console.log('value of formdata>>>', formData);
    const { data } = yield axios.post(
      `https://app.exclusivegulets.com/api/v1/users.json`,
      formData
    );
    console.log('value fo data after success>>>', data);
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
