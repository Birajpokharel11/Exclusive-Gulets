import { takeLatest, call, all, put } from 'redux-saga/effects';
import queryString from 'query-string';

import axios from 'axios';

import { Limits, Sort } from '@utils/enums';

import * as DestinationType from './destination.types';
import * as destinationAction from './destination.actions';
import {
  fetchDestinationStart,
  fetchDestinationByIdStart
} from './destination.actions';

export function* fetchDestinationAsync({
  payload: {
    page = 1,
    amount_per_page = Limits.BLOGS_PER_PAGE,
    sort_by = Sort.SORT_BY,
    sort_order = Sort.SORT_ORDER
  }
}: ReturnType<typeof fetchDestinationStart>) {
  try {
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/destinations.json`,
      {
        params: {
          page,
          amount_per_page,
          sort_by,
          sort_order
        }
      }
    );

    yield put(destinationAction.fetchDestinationSuccess(data.destinations));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchDestinationFailure(err));
  }
}

export function* fetchRandomDestinationAsync() {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/destinations/random_destinations`
    );

    yield put(
      destinationAction.fetchRandomDestinationSuccess(data.destinations)
    );
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchRandomDestinationFailure(err));
  }
}

export function* fetchDestinationByIdAsync({
  payload: { id }
}: ReturnType<typeof fetchDestinationByIdStart>) {
  try {
    const { data } = yield axios.get(
      `${process.env.REACT_APP_PROD_URL}/destinations/${id}.json`
    );

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
