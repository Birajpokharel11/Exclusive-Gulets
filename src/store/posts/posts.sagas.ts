import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';
import * as postsType from './posts.types';
import * as postsAction from './posts.actions';
import {
  fetchPostsStart,
  fetchPostsByIdStart,
  createPostStart
} from './posts.actions';
import { openAlert } from '../alert/alert.actions';

import { Limits, Sort } from '@utils/enums';
import router from 'next/router';

export function* fetchPostsAsync({
  payload: { id }
}: ReturnType<typeof fetchPostsStart>) {
  try {
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/api/getBlogsByBroker/${id}`
    );

    console.log('result fetchPostsAsync>>>', data);

    yield put(postsAction.fetchPostsSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchPostsFailure(err));
  }
}

/////////////////////////////////////////////////////////////////////////////////////

export function* fetchRandomPostsAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/destinations/random_destinations`
    );

    yield put(postsAction.fetchRandomPostsSuccess(data.destinations));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchRandomPostsFailure(err));
  }
}

/////////////////////////////////////////////////////////////////////////////////////

export function* fetchPostsaByIdAsync({
  payload: { id }
}: ReturnType<typeof fetchPostsByIdStart>) {
  try {
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/public/getBlogsById/${id}`
    );

    console.log('fetchPostsaByIdAsync data>>', data.detail.data[0]);
    yield put(postsAction.fetchPostsByIdSuccess(data.detail.data[0]));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchPostsByIdFailure(err));
  }
}

/////////////////////////////////////////////////////////////////////////////////////

export function* createPostAsync({
  payload: { formData }
}: ReturnType<typeof createPostStart>) {
  try {
    console.log('entered createpost>>>', formData);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/blog/create`,
      formData
    );
    console.log('createPostAsync on success>>>', data);
    yield put(postsAction.createPostSuccess());
    yield put(openAlert('Blog saved successfully!!!', 'success'));
    router.push('/manage/dashboard');
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.createPostFailure(err));
    yield put(openAlert('Failed to save blog', 'error'));
  }
}

///////////////////////////////////////////////////////////////////////////////////

export function* watchPostsOffer() {
  yield takeLatest(postsType.FETCH_POSTS_START, fetchPostsAsync);
}

export function* watchFetchRandomDestination() {
  yield takeLatest(postsType.FETCH_RANDOM_POSTS_START, fetchRandomPostsAsync);
}

export function* watchPostsById() {
  yield takeLatest(postsType.FETCH_POSTS_BY_ID_START, fetchPostsaByIdAsync);
}

export function* watchCreatePost() {
  yield takeLatest(postsType.CREATE_POST_START, createPostAsync);
}

export function* postsSagas() {
  yield all([
    call(watchPostsOffer),
    call(watchFetchRandomDestination),
    call(watchPostsById),
    call(watchCreatePost)
  ]);
}
