import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import axios from 'axios';

import * as ExperiencesType from './experiences.types';
import * as experiencesAction from './experiences.actions';

export function* fetchExperiencesAsync() {
  try {
    console.log('fetchExperiencesAsync>>>');
    const { data } = yield axios.get(
      `https://app.exclusivegulets.com/api/v1/experiences.json`
    );
    console.log('value of response fetchOfferAsync>>>', data);
    yield put(experiencesAction.fetchExperiencesSuccess(data.experiences));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.fetchExperiencesFailure(err));
  }
}

export function* watchExperiencesOffer() {
  yield takeLatest(
    ExperiencesType.FETCH_EXPERIENCES_START,
    fetchExperiencesAsync
  );
}

export function* experiencesSagas() {
  yield all([call(watchExperiencesOffer)]);
}
