import { takeLatest, call, all, put } from 'redux-saga/effects';
import axiosConfig from '@config/axios.config';

import { openAlert } from '../alert/alert.actions';

import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';
import router from 'next/router';

import * as DestinationType from './offer.types';
import * as destinationAction from './offer.actions';

export function* fetchOfferAsync() {
  try {
    console.log('inside of fetch offer async');
    const { data } = yield axiosConfig.get(`api/offer/generic/list`);

    if (data.status === 'success') {
      yield put(destinationAction.fetchOfferSuccess(data.detail.data));
    } else {
      yield put(destinationAction.fetchOfferFailure(data.message));
      yield put(openAlert('Failed to fetch offer', 'error'));
    }

    console.log('fetchOfferAsync>>>', data);

    yield put(destinationAction.fetchOfferSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchOfferFailure(err));
  }
}

export function* createGenericOfferAsync({ payload: { formData } }: AnyAction) {
  try {
    console.log('createGenericOfferAsync>>>', formData);
    const { data } = yield axiosConfig.post(
      `api/offer/generic/create`,
      formData
    );
    if (data.status === 'success') {
      yield put(destinationAction.createGenericOfferSuccess(data));
      yield put(openAlert('Offer saved successfully!!!', 'success'));
      router.push('/manage/dashboard');
    } else {
      yield put(destinationAction.createGenericOfferFailure(data.status));
      yield put(openAlert('Failed to save offer', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.createGenericOfferFailure(err));
  }
}

export function* fetchGenericOfferByIdAsync({ payload: { id } }: AnyAction) {
  try {
    console.log('fetchGenericOfferByIdAsync>>>', id);
    const { data } = yield axiosConfig.get(`offer/generic/get/${id}`);
    if (data.status === 'success') {
      yield put(destinationAction.fetchGenericOfferByIdSuccess(data));
    } else {
      yield put(destinationAction.fetchGenericOfferByIdFailure(data.status));
      yield put(openAlert('Failed to fetch offer', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchGenericOfferByIdFailure(err));
  }
}

export function* watchFetchOffer() {
  yield takeLatest(DestinationType.FETCH_OFFER_START, fetchOfferAsync);
}

export function* watchFetchGenericOfferById() {
  yield takeLatest(
    DestinationType.FETCH_GENERIC_OFFER_BY_ID_START,
    fetchGenericOfferByIdAsync
  );
}

export function* watchCreateGenericOffer() {
  yield takeLatest(
    DestinationType.CREATE_GENERIC_OFFER_START,
    createGenericOfferAsync
  );
}

export function* offerSagas() {
  yield all([
    call(watchFetchOffer),
    call(watchCreateGenericOffer),
    call(watchFetchGenericOfferById)
  ]);
}
