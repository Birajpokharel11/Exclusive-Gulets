import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';

import axiosConfig from '@config/axios.config';

import * as HomeType from './enquiry.types';
import * as homeAction from './enquiry.actions';
import { openAlert } from '@store/alert/alert.actions';

export function* submitEnquiryAsync({ payload: { formData } }: AnyAction) {
  console.log('FoormData', formData);
  try {
    const { data } = yield axiosConfig.post(
      '/api/general-inquiries/create',
      formData
    );
    console.log('dataEnquiry', data);
    yield put(homeAction.submitEnquirySuccess(data));
    yield put(openAlert('EnQuiry Successfully Submitted', 'success'));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.submitEnquiryFailure(err));
  }
}

export function* fetchEnqueriesAsync() {
  try {
    const { data } = yield axiosConfig.get('/api/general-inquiries/list');
    console.log('Here fetching enqueries list again ');

    console.log('dataEnquiry', data);
    if (data.status === 'success') {
      yield put(homeAction.fetchEnqueriesSuccess(data.detail.data));
      yield put(openAlert('EnQuiry Successfully fetched!!', 'success'));
    } else {
      yield put(homeAction.fetchEnqueriesFailure('Data Not found!!'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.fetchEnqueriesFailure(err));
  }
}

export function* fetchEnqueriesByIdAsync({ payload: { id } }: AnyAction) {
  console.log('Here fetching enqueries by id');
  try {
    const { data } = yield axiosConfig.get(`/api/general-inquiries/get/${id}`);
    console.log('dataEnquiry', data);
    if (data.status === 'success') {
      yield put(homeAction.fetchEnqueriesByIdSuccess(data.detail.data));
      yield put(openAlert('EnQuiry solo Sucessfully Loaded', 'success'));
    } else {
      yield put(homeAction.fetchEnqueriesByIdFailure('Data not found solo'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.fetchEnqueriesByIdFailure(err));
    yield put(openAlert('EnQuiry solo failed', 'error'));
  }
}

export function* watchSubmitEnquiry() {
  yield takeLatest(HomeType.SUBMIT_ENQUIRY_START, submitEnquiryAsync);
}

export function* watchFetchEnqueries() {
  yield takeLatest(HomeType.FETCH_ENQUERIES_START, fetchEnqueriesAsync);
}
export function* watchFetchEnqueriesById() {
  yield takeLatest(
    HomeType.FETCH_ENQUERIES_By_Id_START,
    fetchEnqueriesByIdAsync
  );
}

export function* enquirySagas() {
  yield all([
    call(watchSubmitEnquiry),
    call(watchFetchEnqueries),
    call(watchFetchEnqueriesById)
  ]);
}
