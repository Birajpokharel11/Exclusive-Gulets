import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import axios from 'axios';

import axiosConfig from '@config/axios.config';

import { Limits, Sort } from '@utils/enums';
import { openAlert } from '../alert/alert.actions';
import router from 'next/router';

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
    console.log('here in submit destination>>>', formData);
    const { data } = yield axiosConfig.post('api/destination/create', formData);
    if (data.status === 200) {
      yield put(destinationAction.submitDestinationSuccess(data.destinations));
      yield put(openAlert('Destination saved successfully!!!', 'success'));
      router.push('/manage/destinations');
    } else {
      yield put(destinationAction.submitDestinationFailure(data.status));
      yield put(openAlert('Failed to save destination', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(openAlert('Failed to save destination', 'error'));

    yield put(destinationAction.submitDestinationFailure(err));
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
    DestinationType.CREATE_DESTINATION_START,
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
