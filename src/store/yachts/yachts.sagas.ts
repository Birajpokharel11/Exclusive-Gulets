import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as PostsType from './yachts.types';
import * as postsAction from './yachts.actions';

export function* fetchYachtsAsync({ payload }: AnyAction) {
  const sort = {};
  try {
    console.log('fetchYachtsAsync>>>');
    const { data } = yield axios.post(
      `http://localhost:3000/api/v1/posts/search/filter_yachts.json?${queryString.stringify(
        sort
      )}`,
      {
        body: JSON.stringify(payload)
      }
    );
    console.log('value of response fetchYachtsAsync>>>', data);
    yield put(postsAction.fetchYachtsSuccess(data.posts));
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
