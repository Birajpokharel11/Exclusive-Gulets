import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axiosConfig from '@config/axios.config';
import axios from 'axios';

import * as HomeType from './home.types';
import * as homeAction from './home.actions';
import { openAlert } from '@store/alert/alert.actions';

export function* fetchHomeAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/content/home.json`
    );

    yield put(homeAction.fetchHomeSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.fetchHomeFailure(err));
  }
}
export function* submitEnquiryAsync({ payload: { formData } }: AnyAction) {
  console.log('FoormData', formData);
  try {
    const { data } = yield axiosConfig.post('/api/inquiries/create', formData);
    console.log('dataEnquiry', data);
    yield put(homeAction.submitEnquirySuccess(data));
    yield put(openAlert('EnQuiry Successfully Submitted', 'success'));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(homeAction.submitEnquiryFailure(err));
  }
}
export function* watchFetchHome() {
  yield takeLatest(HomeType.FETCH_HOME_START, fetchHomeAsync);
}
export function* watchSubmitEnquiry() {
  yield takeLatest(HomeType.SUBMIT_ENQUIRY_START, submitEnquiryAsync);
}

export function* homeSagas() {
  yield all([call(watchFetchHome), call(watchSubmitEnquiry)]);
}
