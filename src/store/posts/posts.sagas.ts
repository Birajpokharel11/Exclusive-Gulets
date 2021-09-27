import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as PostsType from './posts.types';
import * as postsAction from './posts.actions';

export function* fetchPostsAsync() {
  try {
    console.log('fetchPostsAsync>>>');
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/posts/latest_posts`
    );
    console.log('value of response fetchOfferAsync>>>', data);
    yield put(postsAction.fetchPostsSuccess(data.posts));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchPostsFailure(err));
  }
}

export function* watchPostsOffer() {
  yield takeLatest(PostsType.FETCH_POSTS_START, fetchPostsAsync);
}

export function* postsSagas() {
  yield all([call(watchPostsOffer)]);
}
