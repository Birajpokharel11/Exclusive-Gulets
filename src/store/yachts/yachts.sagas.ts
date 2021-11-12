import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';
import { openAlert } from '../alert/alert.actions';

import axios from 'axios';

import * as PostsType from './yachts.types';
import * as postsAction from './yachts.actions';

export function* fetchYachtsAsync() {
  try {
    const { data } = yield axios.post(
      `${process.env.REACT_APP_PROD_URL}/search/filter_yachts.json`
    );

    console.log('fetch yacht list>>>', data);

    yield put(postsAction.fetchYachtsSuccess(data.yachts));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchYachtsFailure(err));
  }
}

export function* fetchAdminYachtListAsync() {
  try {
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/api/getAllYachtInfo`
    );

    console.log('fetch yacht list>>>', data);

    yield put(postsAction.fetchAdminYachtsSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchAdminYachtsFailure(err));
  }
}

export function* fetchYachtByIdAsync({ payload }: AnyAction) {
  const { id: yacht_id, user_id } = payload;
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/yachts/${yacht_id}?user_id=${user_id}`
    );
    yield put(postsAction.fetchYachtByIdSuccess(data.yacht));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchYachtByIdFailure(err));
  }
}

export function* createYachtAsync({ payload }: AnyAction) {
  const { formData } = payload;
  try {
    console.log('createYachtAsync>>', formData);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/createYacthInfo`,
      formData
    );
    console.log('createYachtAsync data>>', data);
    yield put(postsAction.createYachtSuccess());
    if (data.status === 'success') {
      yield put(openAlert('yacht created successfully!!', 'success'));
    } else {
      yield put(openAlert(data.status, 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.createYachtFailure(err));
    yield put(openAlert('error while creating yacht!!', 'error'));
  }
}

export function* watchFetchYachts() {
  yield takeLatest(PostsType.FETCH_YACHTS_START, fetchYachtsAsync);
}
export function* watchAdminFetchYachts() {
  yield takeLatest(
    PostsType.FETCH_ADMIN_YACHTS_START,
    fetchAdminYachtListAsync
  );
}

export function* watchFetchYachtById() {
  yield takeLatest(PostsType.FETCH_YACHT_BY_ID_START, fetchYachtByIdAsync);
}
export function* watchCreateYacht() {
  yield takeLatest(PostsType.CREATE_YACHT_START, createYachtAsync);
}

export function* yachtsSagas() {
  yield all([
    call(watchFetchYachts),
    call(watchFetchYachtById),
    call(watchCreateYacht),
    call(watchAdminFetchYachts)
  ]);
}
