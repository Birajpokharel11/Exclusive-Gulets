import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as DestinationType from './destination.types';
import * as destinationAction from './destination.actions';

export function* fetchDestinationAsync({ payload }: AnyAction) {
  try {
    console.log('inside of fetchDestination saga', payload);
    const response = yield axios.get(
      `/destinations.json?${queryString.stringify(payload)}`
    );
    console.log('value of response>>>', response);
    yield put(destinationAction.fetchDestinationSuccess(response));

    destinationAction.fetchDestinationSuccess(response);
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchDestinationSuccess(err));
  }
}

export function* watchFetchDestination() {
  yield takeLatest(
    DestinationType.FETCH_DESTINATION_START,
    fetchDestinationAsync
  );
}

export function* destinationSagas() {
  yield all([call(watchFetchDestination)]);
}
