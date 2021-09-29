import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as blogType from './blog.types';
import * as blogAction from './blog.actions';

export function* fetchBlogAsync({ payload }) {
  try {
    console.log('inside of fetchBlog sasadasdasdga', payload);
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/posts.json?${queryString.stringify(
        payload
      )}`
    );
    console.log('value of response of blogs >>>', data.posts);
    yield put(blogAction.fetchBlogSuccess(data.posts));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(blogAction.fetchBlogFailure(err));
  }
}

export function* watchFetchBlog() {
  yield takeLatest(blogType.FETCH_BLOG_START, fetchBlogAsync);
}

export function* blogSagas() {
  yield all([call(watchFetchBlog)]);
}
