import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as DestinationType from './offer.types';
import * as destinationAction from './offer.actions';

export function* fetchOfferAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/special_offers`
    );

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
