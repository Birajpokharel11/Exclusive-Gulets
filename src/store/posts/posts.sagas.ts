import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';

import axiosConfig from '@config/axios.config';

import * as postsType from './posts.types';
import * as postsAction from './posts.actions';
import {
  fetchPostsStart,
  fetchPostsByIdStart,
  createPostStart,
  editPostStart
} from './posts.actions';
import { openAlert } from '../alert/alert.actions';

import { Limits, Sort } from '@utils/enums';
import router from 'next/router';

export function* fetchPostsAsync({
  payload: { id }
}: ReturnType<typeof fetchPostsStart>) {
  try {
    const { data } = yield axiosConfig.get(`api/getBlogsByBroker/${id}`);

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
    const { data } = yield axiosConfig.get(`api/getBlogsById/${id}`);

    console.log('fetchPostsaByIdAsync data>>', data.detail.data);
    yield put(postsAction.fetchPostsByIdSuccess(data.detail.data));
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
    const { data } = yield axiosConfig.post(`api/blog/create`, formData);
    if (data.status === 200) {
      yield put(postsAction.createPostSuccess());
      yield put(openAlert('Blog saved successfully!!!', 'success'));
      router.push('/manage/dashboard');
    } else {
      yield put(postsAction.createPostFailure(data.status));
      yield put(openAlert('Failed to save blog', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.createPostFailure(err));
    yield put(openAlert('Failed to save blog', 'error'));
  }
}

export function* editPostAsync({
  payload: { formData }
}: ReturnType<typeof editPostStart>) {
  console.log('inside else...');
  try {
    const { data } = yield axiosConfig.post(`api/blog/edit`, formData);
    if (data.status === 200) {
      yield put(postsAction.editPostSuccess());
      yield put(openAlert('Blog edited successfully!!!', 'success'));
      router.push('/manage/dashboard');
    } else {
      yield put(postsAction.editPostFailure(data.status));
      yield put(openAlert('Failed to save blog', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.editPostFailure(err));
    yield put(openAlert('Failed to save blog', 'error'));
  }
}

export function* deletePostAsync({ payload: { id, handleClose } }: AnyAction) {
  try {
    console.log('entered deletePostAsync>>>', id);
    const { data } = yield axiosConfig.post(`api/blog/delete`, { id });
    console.log('deletePostAsync on success>>>', data);
    if (data.status === 200) {
      yield put(postsAction.deletePostSuccess());
      yield put(openAlert('Post deleted successfully!!!', 'success'));
      yield handleClose();
      router.push('/manage/experiences');
    } else {
      yield put(openAlert('Failed to delete post', 'error'));
      yield put(postsAction.deletePostFailure(data.status));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.deletePostFailure(err));
    yield put(openAlert('Failed to delete post', 'error'));
  }
}

export function* createPictureAsync({
  payload: { formData, imgCode }
}: AnyAction) {
  const imageData = {
    id: 1,
    type: 'blog',
    domain: formData.domainName
  };
  try {
    // with authorization header
    const { data } = yield axiosConfig.post(`api/putSignedUrl`, imageData);
    console.log('createPictureAsync data>>', data);
    // const yellow = data.url;
    // without authorization header
    yield axios.put(data.url, formData.selectedFile, {
      headers: {
        'Content-Type': formData.selectedFile.type
      }
    });
    if (imgCode === 'main') {
      imgCode = 'featuredImage';
      yield axiosConfig.post('api/blog/edit', {
        id: formData.id,
        featuredImage: data.objectKey
      });
    } else if (imgCode === 'side') {
      imgCode = 'sideImage';

      yield axiosConfig.post('api/blog/edit', {
        id: formData.id,
        sideImage: data.objectKey
      });
    }

    yield put(
      openAlert(
        `Picture Updated successfully for id no ${formData.id}`,
        'success'
      )
    );

    yield put(postsAction.uploadPostImgSuccess(imgCode, data.objectKey));

    // console.log('Updated', red);

    // yield put(postsAction.addPictureSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.uploadPostImgFailure(err));
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

export function* watchEditPost() {
  yield takeLatest(postsType.EDIT_POST_START, editPostAsync);
}

export function* watchDeletePost() {
  yield takeLatest(postsType.DELETE_POST_START, deletePostAsync);
}

export function* watchUploadPostImg() {
  yield takeLatest(postsType.UPLOAD_POST_START, createPictureAsync);
}

export function* postsSagas() {
  yield all([
    call(watchPostsOffer),
    call(watchFetchRandomDestination),
    call(watchPostsById),
    call(watchCreatePost),
    call(watchEditPost),
    call(watchDeletePost),
    call(watchUploadPostImg)
  ]);
}
