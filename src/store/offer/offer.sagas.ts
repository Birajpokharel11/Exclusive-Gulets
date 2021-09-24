import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as DestinationType from './offer.types';
import * as destinationAction from './offer.actions';

export function* fetchOfferAsync() {
  try {
    console.log('fetchOfferAsync>>>');
    const { data } = yield axios.get(
      `http://localhost:3000/api/v1/special_offers`
    );
    console.log('value of response fetchOfferAsync>>>', data);
    yield put(destinationAction.fetchOfferSuccess(data.offers));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchOfferFailure(err));
  }
}

export function* watchFetchOffer() {
  yield takeLatest(DestinationType.FETCH_OFFER_START, fetchOfferAsync);
}

export function* offerSagas() {
  yield all([call(watchFetchOffer)]);
}
