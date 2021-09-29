import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as DestinationType from './destination.types';
import * as destinationAction from './destination.actions';

export function* fetchDestinationAsync({ payload }: AnyAction) {
  try {
    console.log('inside of fetchDestination saga', payload);
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/destinations.json?${queryString.stringify(
        payload
      )}`
    );
    console.log('value of response>>>', data.destinations);
    yield put(destinationAction.fetchDestinationSuccess(data.destinations));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchDestinationFailure(err));
  }
}

export function* fetchRandomDestinationAsync() {
  try {
    console.log('inside of random destination saga');
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/destinations/random_destinations`
    );
    console.log(
      'value of response fetchRandomDestinationAsync>>>',
      data.destinations
    );
    yield put(
      destinationAction.fetchRandomDestinationSuccess(data.destinations)
    );
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchRandomDestinationFailure(err));
  }
}

export function* fetchDestinationByIdAsync({ payload: { id } }: AnyAction) {
  try {
    console.log('fetchDestinationByIdAsync>>', id);
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/destinations/${id}.json`
    );
    console.log('data fetchDestinationByIdAsync ', data);
    yield put(destinationAction.fetchDestinationByIdSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchDestinationByIdFailure(err));
  }
}

export function* watchFetchDestination() {
  yield takeLatest(
    DestinationType.FETCH_DESTINATION_START,
    fetchDestinationAsync
  );
}

export function* watchFetchRandomDestination() {
  yield takeLatest(
    DestinationType.FETCH_RANDOM_DESTINATION_START,
    fetchRandomDestinationAsync
  );
}

export function* watchDestinationById() {
  yield takeLatest(
    DestinationType.FETCH_DESTINATION_BY_ID_START,
    fetchDestinationByIdAsync
  );
}

export function* destinationSagas() {
  yield all([
    call(watchFetchDestination),
    call(watchFetchRandomDestination),
    call(watchDestinationById)
  ]);
}
