import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
import Router from 'next/router';

import { openAlert } from '../alert/alert.actions';

import * as AuthType from './auth.types';
import * as authActions from './auth.actions';
import {
  signupStart,
  signinStart,
  signupBrokerStart,
  validateUserEmailStart
} from './auth.actions';

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
      `http://yatchcloud-dev.fghire.com/api/public/oauth/token`,
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
    yield put(openAlert('User signed Up successfully!!', 'success'));

    Router.push('/signin');
  } catch (err) {
    console.error('error received onSignupAsync>>>', err);
    yield put(authActions.signupFail(err));
  }
}

export function* onSignupBrokerAsync({
  payload: { formData }
}: ReturnType<typeof signupBrokerStart>) {
  console.log('onsignup async>>>', formData);
  try {
    const { data } = yield axios.post(
      `http://yatchcloud-dev.fghire.com/public/createBroker`,
      formData
    );

    console.log('value fo data after success>>>', data);

    yield put(authActions.signupBrokerSuccess());
    yield put(openAlert('User signed Up successfully!!', 'success'));
    // if (data.status !== 'validation_failure') {
    //   Router.push('/signin');
    // }
  } catch (err) {
    console.error('error received onSignupAsync>>>', err);
    yield put(authActions.signupBrokerFail(err));
  }
}

export function* validateUserAsync({
  payload: { formData }
}: ReturnType<typeof validateUserEmailStart>) {
  try {
    const { data } = yield axios.post(
      `http://yatchcloud-dev.fghire.com/public/validateUserEmailAndBrokerSite`,
      formData
    );

    console.log('value fo data after success>>>', data);

    yield put(authActions.validateUserEmailSuccess(data.detail.data));
  } catch (err) {
    yield put(authActions.validateUserEmailFail(err));
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

export function* watchSignupBroker() {
  yield takeLatest(AuthType.SIGN_UP_BROKER_START, onSignupBrokerAsync);
}

export function* watchSignout() {
  yield takeLatest(AuthType.SIGN_OUT_START, signOutAsync);
}

export function* watchValidateUser() {
  yield takeLatest(AuthType.VALIDATE_USER_EMAIL_START, validateUserAsync);
}

export function* authSagas() {
  yield all([
    call(watchLoadUser),
    call(watchSignin),
    call(watchSignup),
    call(watchSignupBroker),
    call(watchSignout),
    call(watchValidateUser)
  ]);
}
