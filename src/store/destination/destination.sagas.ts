import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';

import axiosConfig from '@config/axios.config';

import { Limits, Sort } from '@utils/enums';

import * as DestinationType from './destination.types';
import * as destinationAction from './destination.actions';
import {
  fetchDestinationStart,
  fetchDestinationByIdStart
} from './destination.actions';

export function* fetchDestinationAsync() {
  try {
    const { data } = yield axiosConfig.get('/api/destination/list');
    console.log('data>>>', data);

    yield put(destinationAction.fetchDestinationSuccess(data.destinations));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(destinationAction.fetchDestinationFailure(err));
  }
}

export function* submitDestinationAsync({ payload: { formData } }: AnyAction) {
  try {
    const { data } = yield axiosConfig.post(
      '/api/destination/create',
      formData
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

export function* watchSubmitDestination() {
  yield takeLatest(
    DestinationType.SUBMIT_DESTINATION_START,
    submitDestinationAsync
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
    call(watchSubmitDestination),
    call(watchFetchRandomDestination),
    call(watchDestinationById)
  ]);
}
