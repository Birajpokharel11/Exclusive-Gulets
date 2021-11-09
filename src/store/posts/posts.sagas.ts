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
  payload: {
    page = 1,
    amount_per_page = Limits.BLOGS_PER_PAGE,
    sort_by = Sort.SORT_BY,
    sort_order = Sort.SORT_ORDER
  }
}: ReturnType<typeof fetchPostsStart>) {
  try {
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/posts.json`,
      {
        params: { page, amount_per_page, sort_by, sort_order }
      }
    );

    yield put(postsAction.fetchPostsSuccess(data));
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
      `${process.env.REACT_APP_PROD_URL}/posts/${id}`
    );
    yield put(postsAction.fetchPostsByIdSuccess(data));
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
      `https://yatchcloud-dev.fghire.com/api/saveBlog`,
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
