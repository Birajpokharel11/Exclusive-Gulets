import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as charterType from './charter.types';
import * as charterAction from './charter.actions';

export function* fetchCharterAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/content/why-charter.json`
    );

    yield put(charterAction.fetchCharterSuccess(data));
    console.log('Charter Results>>>>>', data);
  } catch (err) {
    console.error('error received>>>', err);
    yield put(charterAction.fetchCharterFailure(err));
  }
}

export function* watchCharter() {
  yield takeLatest(charterType.FETCH_CHARTER_START, fetchCharterAsync);
}

export function* charterSagas() {
  yield all([call(watchCharter)]);
}
