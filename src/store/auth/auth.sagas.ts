import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
import router from 'next/router';

import { openAlert } from '../alert/alert.actions';

import * as AuthType from './auth.types';
import * as authActions from './auth.actions';
import {
  signupStart,
  signinStart,
  signupBrokerStart,
  validateUserEmailStart,
  verifyBrokerStart
} from './auth.actions';

import setAuthToken from '@utils/setAuthToken';

export function* loadUserAsync() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/api/getUserSession`
    );

    const profile = {
      ...data.detail.data.profile,
      userType: data.detail.data.userType,
      username: data.detail.data.username,
      roles: data.detail.data.roleList
    };

    yield put(authActions.loadUserSuccess(profile));
  } catch (err) {
    console.error(err);
    yield put(authActions.loadUserFail(err));
  }
}

export function* onSigninAsync({
  payload: { formData }
}: ReturnType<typeof signinStart>) {
  try {
    console.log('data in signIn>>>', formData);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/oauth/token`,
      null,
      {
        params: {
          ...formData
        }
      }
    );
    console.log('value fo data after success>>>', data);
    yield put(openAlert('Signin Success!!', 'success'));
    yield put(authActions.signinSuccess(data));
    yield put(authActions.loadUserStart());
  } catch (err) {
    console.error('error received onSigninAsync>>>', err);
    yield put(openAlert('Internal Server Error!!', 'error'));
    yield put(authActions.signinFail(err));
  }
}

export function* onSignupAsync({
  payload: { formData }
}: ReturnType<typeof signupStart>) {
  try {
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/createManager`,
      formData
    );

    console.log('value fo data after success>>>', data);

    yield put(authActions.signupSuccess());
    yield put(openAlert('User signed Up successfully!!', 'success'));

    router.push('/signin');
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
      `https://yatchcloud-dev.fghire.com/api/createBroker`,
      formData
    );

    console.log('value fo data after success>>>', data);

    if (data.status === 'success') {
      yield put(authActions.signupBrokerSuccess());
      yield put(openAlert('User signed Up successfully!!', 'success'));
      router.push('/signin');
    } else {
      yield put(openAlert('Internal Server Error!!', 'error'));
    }
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
      `https://yatchcloud-dev.fghire.com/api/validateUserEmailAndBrokerSite`,
      formData
    );

    console.log('value fo data after success>>>', data);

    yield put(authActions.validateUserEmailSuccess(data.detail.data));
  } catch (err) {
    yield put(authActions.validateUserEmailFail(err));
  }
}

export function* verifyBrokerAsync({
  payload: { formData }
}: ReturnType<typeof verifyBrokerStart>) {
  console.log(formData);

  try {
    let { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/verifyBrokerAccount
      `,
      formData
    );

    console.log('value fo data after success>>>', data);
    if (data.status === 'success') {
      yield put(authActions.verifyBrokerSuccess(data.detail.data));
      yield put(openAlert('User Account Verified!!', 'success'));
      router.push('/signin');
    } else {
      yield put(openAlert('Internal Server Error!!', 'error'));
    }
  } catch (err) {
    yield put(authActions.verifyBrokerFail(err));
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

export function* watchVerifyBroker() {
  yield takeLatest(AuthType.VERIFY_BROKER_START, verifyBrokerAsync);
}

export function* authSagas() {
  yield all([
    call(watchLoadUser),
    call(watchSignin),
    call(watchSignup),
    call(watchSignupBroker),
    call(watchSignout),
    call(watchValidateUser),
    call(watchVerifyBroker)
  ]);
}
