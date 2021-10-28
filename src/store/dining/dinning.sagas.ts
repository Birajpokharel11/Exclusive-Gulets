import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as diningType from './dinning.types';
import * as diningAction from './dinning.actions';

export function* fetchDiningAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/content/blog.json`
    );

    yield put(diningAction.fetchDiningSuccess(data));
    console.log('Dinning Results>>>>>', data.dining);
  } catch (err) {
    console.error('error received>>>', err);
    yield put(diningAction.fetchDiningFailure(err));
  }
}

export function* watchDining() {
  yield takeLatest(diningType.FETCH_DINING_START, fetchDiningAsync);
}

export function* dinningSagas() {
  yield all([call(watchDining)]);
}
