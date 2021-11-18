import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';

import axiosConfig from '@config/axios.config';

import { openAlert } from '../alert/alert.actions';

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
    const { data } = yield axiosConfig.get('api/yacht/list');

    console.log('fetch admin yacht list>>>', data);

    yield put(postsAction.fetchAdminYachtsSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchAdminYachtsFailure(err));
  }
}

export function* fetchYachtByIdAsync({ payload }: AnyAction) {
  const { id: yacht_id } = payload;
  console.log('HERE IN SAGAs', yacht_id);
  try {
    console.log('yacht_id >>>', yacht_id);
    const { data } = yield axiosConfig.get(`api/yacht/get/${yacht_id}`);
    console.log('DAtaIdsss', data.detail.data);
    yield put(postsAction.fetchYachtByIdSuccess(data.detail.data[0]));
    console.log('IDSUCESSFULL');
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchYachtByIdFailure(err));
  }
}

export function* createYachtAsync({ payload }: AnyAction) {
  const { formData } = payload;
  try {
    console.log('createYachtAsync>>', formData);
    const { data } = yield axiosConfig.post(`api/yacht/create`, formData);
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

export function* editYachtAsync({ payload }: AnyAction) {
  const { formData } = payload;
  try {
    console.log('editYachtAsync>>', formData);
    const { data } = yield axiosConfig.post(`api/yacht/edit`, formData);
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

export function* fetchFlagAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getFlags`);
    console.log('fetchFlagAsync data>>', data);
    yield put(postsAction.fetchFlagSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchFlagFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* fetchCountryAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getCountries`);
    console.log('fetchFlagAsync data>>', data);
    yield put(postsAction.fetchCountrySuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchCountryFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* fetchHomePortAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getHomePorts`);
    console.log('fetchHomePortAsync data>>', data);
    yield put(postsAction.fetchHomePortSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchHomePortFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* fetchWaterToysAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getYachtToys`);
    console.log('fetchWaterToysAsync data>>', data);
    yield put(postsAction.fetchWaterToysSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchWaterToysFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* fetchInclusiveTermAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getYachtTerms`);
    console.log('fetchInclusiveTermAsync data>>', data);
    yield put(postsAction.fetchInclusiveTermSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchInclusiveTermFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* fetchExtrasAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getYachtExtras`);
    console.log('fetchExtrasAsync data>>', data);
    yield put(postsAction.fetchExtrasSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchExtrasFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* fetchYachtFeatureAsync() {
  try {
    const { data } = yield axiosConfig.get(`api/getYachtFeatures`);
    console.log('fetchYachtFeatureAsync data>>', data);
    yield put(postsAction.fetchYachtFeaturesSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.fetchYachtFeaturesFailure(err));
    yield put(openAlert('error while updating yacht!!', 'error'));
  }
}

export function* createPictureAsync({ payload }: AnyAction) {
  try {
    console.log('hereinpictures', payload, payload.selectedFile.type);
    const token = localStorage.getItem('token');
    console.log('TOken', token);
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    console.log('config,', config);
    // with authorization header
    const { data } = yield axiosConfig.post(`api/putSignedUrl`, {
      id: payload.id,
      type: payload.type
    });
    console.log('createYachtAsync data>>', data);
    // const yellow = data.url;
    // without authorization header
    yield axios.put(data.url, payload.selectedFile, {
      headers: {
        'Content-Type': payload.selectedFile.type
      }
    });
    yield axiosConfig.post('https://yatchcloud-dev.fghire.com/api/yacht/edit', {
      id: payload.id,
      mainImage: data.objectKey
    });
    // console.log('Updated', red);

    // yield put(postsAction.addPictureSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(postsAction.addPictureStop(err));
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

export function* watchEditYacht() {
  yield takeLatest(PostsType.EDIT_YACHT_START, editYachtAsync);
}

export function* watchFetchFlag() {
  yield takeLatest(PostsType.FETCH_FLAG_START, fetchFlagAsync);
}

export function* watchFetchCountry() {
  yield takeLatest(PostsType.FETCH_COUNTRY_START, fetchCountryAsync);
}

export function* watchFetchHomePort() {
  yield takeLatest(PostsType.FETCH_HOMEPORT_START, fetchHomePortAsync);
}

export function* watchFetchWaterToys() {
  yield takeLatest(PostsType.FETCH_WATERTOYS_START, fetchWaterToysAsync);
}

export function* watchFetchInclusiveTerm() {
  yield takeLatest(
    PostsType.FETCH_INCLUSIVETERM_START,
    fetchInclusiveTermAsync
  );
}

export function* watchFetchExtras() {
  yield takeLatest(PostsType.FETCH_EXTRAS_START, fetchExtrasAsync);
}

export function* watchFetchYachtFeature() {
  yield takeLatest(
    PostsType.FETCH_YACHT_FEATURES_START,
    fetchYachtFeatureAsync
  );
}

export function* watchCreatePicture() {
  yield takeLatest(PostsType.ADD_PIC_START, createPictureAsync);
}

export function* yachtsSagas() {
  yield all([
    call(watchFetchYachts),
    call(watchFetchYachtById),
    call(watchCreateYacht),
    call(watchAdminFetchYachts),
    call(watchEditYacht),
    call(watchFetchFlag),
    call(watchFetchCountry),
    call(watchFetchHomePort),
    call(watchFetchWaterToys),
    call(watchFetchInclusiveTerm),
    call(watchFetchExtras),
    call(watchFetchYachtFeature),
    call(watchCreatePicture)
  ]);
}
