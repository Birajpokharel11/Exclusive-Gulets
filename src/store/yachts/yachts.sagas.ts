import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as PostsType from './yachts.types';
import * as postsAction from './yachts.actions';

export function* fetchYachtsAsync() {
  try {
    console.log('fetchYachtsAsync>>>');
    const { data } = yield axios.post(
      'https://app.exclusivegulets.com/api/v1/search/filter_yachts.json'
    );
    console.log('value of response fetchYachtsAsync>>>', data.yachts);
    yield put(postsAction.fetchYachtsSuccess(data.yachts));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchYachtsFailure(err));
  }
}

export function* watchFetchYachts() {
  yield takeLatest(PostsType.FETCH_YACHTS_START, fetchYachtsAsync);
}

export function* yachtsSagas() {
  yield all([call(watchFetchYachts)]);
}
