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
<<<<<<< HEAD
      `https://yatchcloud-dev.fghire.com/api/yacht/list`
=======
      'https://yatchcloud-dev.fghire.com/api/yacht/list'
>>>>>>> New-Api
    );

    console.log('fetch admin yacht list>>>', data);

    yield put(postsAction.fetchAdminYachtsSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchAdminYachtsFailure(err));
  }
}

export function* fetchYachtByIdAsync({ payload }: AnyAction) {
  const { id: yacht_id } = payload;
<<<<<<< HEAD
=======
  console.log('HERE IN SAGAs', yacht_id);
>>>>>>> New-Api
  try {
    console.log('yacht_id >>>', yacht_id);
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/api/yacht/get/${yacht_id}`
    );
<<<<<<< HEAD
    console.log('data fetchYachtByIdAsync>>>', data.detail.data);
    yield put(postsAction.fetchYachtByIdSuccess(data.detail.data[0]));
=======
    console.log('DAtaIdsss', data.detail.data);
    yield put(postsAction.fetchYachtByIdSuccess(data.detail.data[0]));
    console.log('IDSUCESSFULL');
>>>>>>> New-Api
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
      `https://yatchcloud-dev.fghire.com/api/yacht/create`,
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

<<<<<<< HEAD
export function* editYachtAsync({ payload }: AnyAction) {
  const { formData } = payload;
  try {
    console.log('editYachtAsync>>', formData);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/yacht/edit`,
      formData
    );
    console.log('editYachtAsync data>>', data);
    yield put(postsAction.editYachtSuccess());
    if (data.status === 'success') {
      yield put(openAlert('yacht updated successfully!!', 'success'));
    } else {
      yield put(openAlert(data.status, 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.editYachtFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

=======
export function* createPictureAsync() {
  try {
    console.log('hereinpictures');
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/putSignedUrl`
    );
    console.log('createYachtAsync data>>', data);
    yield put(postsAction.addPictureSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.addPictureStop(err));
  }
}
>>>>>>> New-Api
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

<<<<<<< HEAD
export function* watchEditYacht() {
  yield takeLatest(PostsType.EDIT_YACHT_START, editYachtAsync);
=======
export function* watchCreatePicture() {
  yield takeLatest(PostsType.ADD_PIC_START, createPictureAsync);
>>>>>>> New-Api
}

export function* yachtsSagas() {
  yield all([
    call(watchFetchYachts),
    call(watchFetchYachtById),
    call(watchCreateYacht),
    call(watchAdminFetchYachts),
<<<<<<< HEAD
    call(watchEditYacht)
=======
    call(watchCreatePicture)
>>>>>>> New-Api
  ]);
}
