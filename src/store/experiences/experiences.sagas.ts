import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';

import { openAlert } from '../alert/alert.actions';

import axios from 'axios';
import router from 'next/router';

import * as ExperiencesType from './experiences.types';
import * as experiencesAction from './experiences.actions';

export function* fetchExperiencesAsync({ payload: { id } }: AnyAction) {
  try {
    console.log('fetchExperiencesAsync>>>', id);
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/public/getExperiencesByBroker/${id}`
    );

    console.log('fetch experience value>>>', data);

    yield put(experiencesAction.fetchExperiencesSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.fetchExperiencesFailure(err));
  }
}

export function* fetchExperienceByIdAsync({ payload: { id } }: AnyAction) {
  try {
    const { data } = yield axios.get(
      `https://yatchcloud-dev.fghire.com/public/getExperiencesById/${id}`
    );

    console.log('individual experience data>>', data);
    yield put(
      experiencesAction.fetchExperienceByIdSuccess(data.detail.data[0])
    );
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.fetchExperienceByIdFailure(err));
  }
}

export function* createExperienceAsync({ payload: { formData } }: AnyAction) {
  try {
    console.log('entered createExperienceAsync>>>', formData);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/experience/create`,
      formData
    );
    console.log('createExperienceAsync on success>>>', data);
    yield put(experiencesAction.createExperienceSuccess());
    yield put(openAlert('Experience saved successfully!!!', 'success'));
    router.push('/manage/dashboard');
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.createExperienceFailure(err));
    yield put(openAlert('Failed to save experience', 'error'));
  }
}

export function* editExperienceAsync({ payload: { formData } }: AnyAction) {
  try {
    console.log('entered editExperienceAsync>>>', formData);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/experience/edit`,
      formData
    );
    console.log('editExperienceAsync on success>>>', data);
    if (data.status === 'success') {
      yield put(experiencesAction.editExperienceSuccess());
      yield put(openAlert('Experience edited successfully!!!', 'success'));
      router.push('/manage/experiences');
    } else {
      yield put(openAlert('Failed to edit experience', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.editExperienceFailure(err));
    yield put(openAlert('Failed to save experience', 'error'));
  }
}

export function* deleteExperienceAsync({
  payload: { id, handleClose }
}: AnyAction) {
  try {
    console.log('entered deleteExperienceAsync>>>', id);
    const { data } = yield axios.post(
      `https://yatchcloud-dev.fghire.com/api/experience/delete/${id}`
    );
    console.log('deleteExperienceAsync on success>>>', data);
    if (data.status === 'success') {
      yield put(experiencesAction.deleteExperienceSuccess());
      yield put(openAlert('Experience deleted successfully!!!', 'success'));
      yield handleClose();
      router.push('/manage/experiences');
    } else {
      yield put(openAlert('Failed to delete experience', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.deleteExperienceFailure(err));
    yield put(openAlert('Failed to delete experience', 'error'));
  }
}

export function* watchExperiencesOffer() {
  yield takeLatest(
    ExperiencesType.FETCH_EXPERIENCES_START,
    fetchExperiencesAsync
  );
}

export function* watchExperienceById() {
  yield takeLatest(
    ExperiencesType.FETCH_EXPERIENCE_BY_ID_START,
    fetchExperienceByIdAsync
  );
}

export function* watchCreateExperience() {
  yield takeLatest(
    ExperiencesType.CREATE_EXPERIENCE_START,
    createExperienceAsync
  );
}

export function* watchDeleteExperience() {
  yield takeLatest(
    ExperiencesType.DELETE_EXPERIENCE_START,
    deleteExperienceAsync
  );
}

export function* watchEditExperience() {
  yield takeLatest(ExperiencesType.EDIT_EXPERIENCE_START, editExperienceAsync);
}

export function* experiencesSagas() {
  yield all([
    call(watchExperiencesOffer),
    call(watchExperienceById),
    call(watchCreateExperience),
    call(watchEditExperience),
    call(watchDeleteExperience)
  ]);
}
