import { takeLatest, call, all, put } from 'redux-saga/effects';
import axiosConfig from '@config/axios.config';
import { AnyAction } from 'redux';

import axios from 'axios';

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
    // yield put(homeAction.fetchEnqueriesSuccess(data));
    yield put(openAlert('EnQuiry Successfully Submitted', 'success'));
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
    yield put(homeAction.fetchEnqueriesSuccess(data));
    yield put(openAlert('EnQuiry Successfully Submitted', 'success'));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.fetchEnqueriesFailure(err));
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

export function* homeSagas() {
  yield all([
    call(watchSubmitEnquiry),
    call(watchFetchEnqueries),
    call(watchFetchEnqueriesById)
  ]);
}
