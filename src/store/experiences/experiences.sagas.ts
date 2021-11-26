import { takeLatest, call, all, put } from 'redux-saga/effects';
import { AnyAction } from 'redux';
import queryString from 'query-string';
import router from 'next/router';
import axios from 'axios';

import axiosConfig from '@config/axios.config';

import { openAlert } from '../alert/alert.actions';

import * as ExperiencesType from './experiences.types';
import * as experiencesAction from './experiences.actions';

export function* fetchExperiencesAsync({ payload: { id } }: AnyAction) {
  try {
    console.log('fetchExperiencesAsync>>>', id);
    const { data } = yield axiosConfig.get(`api/getExperiencesByBroker/${id}`);

    console.log('fetch experience value>>>', data);

    yield put(experiencesAction.fetchExperiencesSuccess(data.detail.data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.fetchExperiencesFailure(err));
  }
}

export function* fetchExperienceByIdAsync({ payload: { id } }: AnyAction) {
  try {
    const { data } = yield axiosConfig.get(`api/getExperiencesById/${id}`);

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
    const { data } = yield axiosConfig.post(`api/experience/create`, formData);
    if (data.status === 200) {
      yield put(experiencesAction.createExperienceSuccess());
      yield put(openAlert('Experience saved successfully!!!', 'success'));
      router.push('/manage/experiences');
    } else {
      yield put(openAlert('Failed to save experience', 'error'));
      yield put(experiencesAction.createExperienceFailure(data.status));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.createExperienceFailure(err));
    yield put(openAlert('Failed to save experience', 'error'));
  }
}

export function* editExperienceAsync({ payload: { formData } }: AnyAction) {
  try {
    const { data } = yield axiosConfig.post(`api/experience/edit`, formData);
    if (data.status === 200) {
      yield put(experiencesAction.editExperienceSuccess());
      yield put(openAlert('Experience edited successfully!!!', 'success'));
      router.push('/manage/experiences');
    } else {
      yield put(experiencesAction.editExperienceFailure(data.status));
      yield put(openAlert('Failed to save experience', 'error'));
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
    const { data } = yield axiosConfig.post(`/api/experience/delete`, { id });
    console.log('deleteExperienceAsync on success>>>', data);
    if (data.status === 200) {
      yield put(experiencesAction.deleteExperienceSuccess());
      yield put(openAlert('Experience deleted successfully!!!', 'success'));
      yield handleClose();
      router.push('/manage/experiences');
    } else {
      const err = 'error on deleting experience';
      yield put(experiencesAction.deleteExperienceFailure(err));
      yield put(openAlert('Failed to delete experience', 'error'));
    }
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.deleteExperienceFailure(err));
    yield put(openAlert('Failed to delete experience', 'error'));
  }
}

export function* createPictureAsync({
  payload: { imgData, imgCode, formData }
}: AnyAction) {
  console.log('createPictureAsync>>>', { imgData, imgCode, formData });
  const newImgData = {
    id: 1,
    type: 'experience',
    domain: imgData.domainName
  };
  try {
    // with authorization header
    const { data } = yield axiosConfig.post(`api/putSignedUrl`, newImgData);
    console.log('createPictureAsync data>>', data);
    // const yellow = data.url;
    // without authorization header
    yield axios.put(data.url, imgData.selectedFile, {
      headers: {
        'Content-Type': imgData.selectedFile.type
      }
    });
    if (imgCode === 'main') {
      imgCode = 'featuredImage';
      yield axiosConfig.post('api/experience/edit', {
        ...formData,
        featuredImage: data.objectKey
      });
    } else if (imgCode === 'side') {
      imgCode = 'sideImage';

      yield axiosConfig.post('api/experience/edit', {
        ...formData,
        sideImage: data.objectKey
      });
    }

    yield put(
      openAlert(
        `Picture Updated successfully for id no ${formData.id}`,
        'success'
      )
    );

    yield put(
      experiencesAction.uploadExperienceImgSuccess(imgCode, data.objectKey)
    );

    // console.log('Updated', red);

    // yield put(postsAction.addPictureSuccess(data));
  } catch (err) {
    console.error('error received>>>', err);
    yield put(experiencesAction.uploadExperienceImgFailure(err));
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

export function* watchUploadExperienceImg() {
  yield takeLatest(ExperiencesType.UPLOAD_EXPERIENCE_START, createPictureAsync);
}

export function* experiencesSagas() {
  yield all([
    call(watchExperiencesOffer),
    call(watchExperienceById),
    call(watchCreateExperience),
    call(watchEditExperience),
    call(watchDeleteExperience),
    call(watchUploadExperienceImg)
  ]);
}
