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
      `http://localhost:3000/api/v1/destinations.json?${queryString.stringify(
        payload
      )}`
    );
    console.log('value of response>>>', data.destinations);
    yield put(destinationAction.fetchDestinationSuccess(data.destinations));
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
