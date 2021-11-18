import { takeLatest, call, all, put } from 'redux-saga/effects';
import axios from 'axios';
import router from 'next/router';
import _ from 'lodash';

import axiosConfig, { setAuthToken } from '@config/axios.config';

import { openAlert } from '../alert/alert.actions';

import * as AuthType from './auth.types';
import * as authActions from './auth.actions';
import {
  signupStart,
  signinStart,
  signupBrokerStart,
  validateUserEmailStart,
  verifyBrokerStart,
  signoutStart,
  loadUserStart
} from './auth.actions';

export function* loadUserAsync({ payload }: ReturnType<typeof loadUserStart>) {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = yield axiosConfig.get(`api/getUserSession`);

    const profile = {
      ...data.detail.data.profile,
      userType: data.detail.data.userType,
      username: data.detail.data.username,
      roles: data.detail.data.roleList.map((item) => item.authority)
    };

    yield put(authActions.loadUserSuccess(profile));
    if (payload === 'signIn') {
      yield put(
        openAlert(`logged in with ${data.detail.data.userType} role`, 'success')
      );
    }
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
    const { data } = yield axiosConfig.post(`oauth/token`, null, {
      params: {
        ...formData
      }
    });
    const route = 'signIn';
    console.log('value fo data after success>>>', data);
    yield put(openAlert('Signin Success!!', 'success'));
    yield put(authActions.signinSuccess(data));
    yield put(authActions.loadUserStart(route));
  } catch (err) {
    console.error('error received onSigninAsync>>>', err);
    yield put(openAlert('Internal Server Error!!', 'error'));
    yield put(authActions.signinFail(err));
  }
}

export function* onSignupAsync({
  payload: { formData }
}: ReturnType<typeof signupStart>) {
  delete formData.password2;

  try {
    const { data } = yield axiosConfig.post(`public/createManager`, formData);

    console.log('value fo data after success>>>', data);

    yield put(authActions.signupSuccess());
    yield put(openAlert('manager signed Up successfully!!', 'success'));

    router.push('/signin');
  } catch (err) {
    console.error('error received onSignupAsync>>>', err);
    yield put(authActions.signupFail(err));
  }
}

export function* onSignupBrokerAsync({
  payload: { formData }
}: ReturnType<typeof signupBrokerStart>) {
  delete formData.password2;
  console.log('onsignup async>>>', formData);
  try {
    const { data } = yield axiosConfig.post(`public/createBroker`, formData);
    console.log('value fo data after success>>>', data);
    if (data.status === 'success') {
      yield put(authActions.signupBrokerSuccess());
      yield put(openAlert('User signed Up successfully!!', 'success'));
      router.push('/signin');
    } else {
      yield put(openAlert(data.status || 'Internal Server Error!!', 'error'));
      yield put(authActions.signupBrokerFail(data.status));
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
    const { data } = yield axiosConfig.post(
      `public/validateUserEmailAndBrokerSite`,
      formData
    );

    console.log('value fo data after success>>>', data);

    if (data.status === 'success') {
      yield put(authActions.validateUserEmailSuccess(data.detail.data));

      if (data.detail.data.isValidEmail === true) {
        yield put(openAlert('The entered email is valid', 'success'));
      } else if (data.detail.data.isValidEmail === false) {
        yield put(openAlert('The entered email is invalid', 'error'));
      } else if (data.detail.data.isValidSite === true) {
        yield put(openAlert('The entered domain name is valid', 'success'));
      } else {
        yield put(openAlert('The entered domain name is invalid', 'error'));
      }
    } else {
      yield put(openAlert('Internal Server Error!!', 'error'));
    }
  } catch (err) {
    yield put(authActions.validateUserEmailFail(err));
  }
}

export function* verifyBrokerAsync({
  payload: { formData }
}: ReturnType<typeof verifyBrokerStart>) {
  console.log(formData);

  try {
    let { data } = yield axiosConfig.post(
      `public/verifyBrokerAccount
      `,
      formData
    );

    console.log('value fo data after success>>>', data);
    if (data.status === 'success') {
      yield put(authActions.verifyBrokerSuccess(data.detail.data));
      yield put(openAlert('User Account Verified!!', 'success'));
    } else {
      yield put(openAlert('Internal Server Error!!', 'error'));
    }
  } catch (err) {
    yield put(authActions.verifyBrokerFail(err));
  }
}

export function* signOutAsync({
  payload: { token }
}: ReturnType<typeof signoutStart>) {
  try {
    console.log('inside of signout async???', token);
    let { data } = yield axiosConfig.post(`api/oauth/logout`, token);
    console.log('data on signout>>>', data);
    if (data.status === 200) {
      yield put(authActions.signoutSuccess());
      yield put(openAlert('User Signed Out Successfully!!', 'success'));
      router.push('/');
    } else {
      yield put(openAlert('Internal Server Error!!', 'error'));
    }
  } catch (err) {
    yield put(authActions.signoutFail(err));
  }
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
