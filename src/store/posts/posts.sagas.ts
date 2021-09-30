import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';
import * as postsType from './posts.types';
import * as postsAction from './posts.actions';
import queryString from 'query-string';
export function* fetchPostsAsync({ payload: { page, amount_per_page } }) {
  try {
    console.log('fetchPostsAsync>>>', { page, amount_per_page });
    // const { data } = yield axios.get(
    //   `${process.env.REACT_APP_PROD_URL}/posts.json?${queryString.stringify(
    //     payload
    //   )}`
    // );

    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/posts.json?${queryString.stringify(
        { page, amount_per_page }
      )}`
    );
    console.log('value of response fetchOfferAsync>>>', data);
    yield put(postsAction.fetchPostsSuccess(data.posts));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchPostsFailure(err));
  }
}

export function* watchPostsOffer() {
  yield takeLatest(postsType.FETCH_POSTS_START, fetchPostsAsync);
}

export function* postsSagas() {
  yield all([call(watchPostsOffer)]);
}
