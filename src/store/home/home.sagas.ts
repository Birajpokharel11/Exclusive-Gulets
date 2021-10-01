import { takeLatest, call, all, put } from 'redux-saga/effects';

import axios from 'axios';

import * as HomeType from './home.types';
import * as homeAction from './home.actions';

export function* fetchHomeAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/content/home.json`
    );

    yield put(homeAction.fetchHomeSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.fetchHomeFailure(err));
  }
}

export function* watchFetchHome() {
  yield takeLatest(HomeType.FETCH_HOME_START, fetchHomeAsync);
}

export function* homeSagas() {
  yield all([call(watchFetchHome)]);
}
