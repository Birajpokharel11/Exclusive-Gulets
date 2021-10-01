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

/////////////////////////////////////////////////////////////////////////////////////

export function* fetchRandomPostsAsync() {
  try {
    console.log('inside of random destination saga');
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/destinations/random_destinations`
    );
    console.log(
      'value of response fetchRandomDestinationAsync>>>',
      data.destinations
    );
    yield put(postsAction.fetchRandomPostsSuccess(data.destinations));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchRandomPostsFailure(err));
  }
}

/////////////////////////////////////////////////////////////////////////////////////

export function* fetchPostsaByIdAsync({ payload: { id } }) {
  try {
    console.log('fetchDestinationByIdAsync>>', id);
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/posts/${id}`
    );
    console.log('data fetchDestinationByIdAsync ', data);
    yield put(postsAction.fetchPostsByIdSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchPostsByIdFailure(err));
  }
}

/////////////////////////////////////////////////////////////////////////////////////

export function* watchPostsOffer() {
  yield takeLatest(postsType.FETCH_POSTS_START, fetchPostsAsync);
}

export function* watchFetchRandomDestination() {
  yield takeLatest(postsType.FETCH_RANDOM_POSTS_START, fetchRandomPostsAsync);
}

export function* watchPostsById() {
  yield takeLatest(postsType.FETCH_POSTS_BY_ID_START, fetchPostsaByIdAsync);
}
export function* postsSagas() {
  yield all([
    call(watchPostsOffer),
    call(watchFetchRandomDestination),
    call(watchPostsById)
  ]);
}
