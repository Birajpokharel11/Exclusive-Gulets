import * as ExperiencesType from './experiences.types';

export const fetchExperiencesStart = (id) => ({
  type: ExperiencesType.FETCH_EXPERIENCES_START,
  payload: { id }
});

export const fetchExperiencesSuccess = (result) => ({
  type: ExperiencesType.FETCH_EXPERIENCES_SUCCESS,
  payload: result
});

export const fetchExperiencesFailure = (error) => ({
  type: ExperiencesType.FETCH_EXPERIENCES_FAILURE,
  payload: error
});

export const fetchExperienceByIdStart = (id) => ({
  type: ExperiencesType.FETCH_EXPERIENCE_BY_ID_START,
  payload: { id }
});

export const fetchExperienceByIdSuccess = (result) => ({
  type: ExperiencesType.FETCH_EXPERIENCE_BY_ID_SUCCESS,
  payload: result
});

export const fetchExperienceByIdFailure = (error) => ({
  type: ExperiencesType.FETCH_EXPERIENCES_FAILURE,
  payload: error
});

export const createExperienceStart = (
  formData,
  mainSelectedFile?: any,
  sideSelectedFile?: any,
  domainName?: any
) => ({
  type: ExperiencesType.CREATE_EXPERIENCE_START,
  payload: { formData, mainSelectedFile, sideSelectedFile, domainName }
});

export const createExperienceSuccess = () => ({
  type: ExperiencesType.CREATE_EXPERIENCE_SUCCESS
});

export const createExperienceFailure = (error) => ({
  type: ExperiencesType.CREATE_EXPERIENCE_FAILURE,
  payload: error
});

export const editExperienceStart = (
  formData,
  mainSelectedFile?: any,
  sideSelectedFile?: any,
  domainName?: any
) => ({
  type: ExperiencesType.EDIT_EXPERIENCE_START,
  payload: { formData, mainSelectedFile, sideSelectedFile, domainName }
});

export const editExperienceSuccess = () => ({
  type: ExperiencesType.EDIT_EXPERIENCE_SUCCESS
});

export const editExperienceFailure = (error) => ({
  type: ExperiencesType.EDIT_EXPERIENCE_FAILURE,
  payload: error
});

export const deleteExperienceStart = (id, handleClose) => ({
  type: ExperiencesType.DELETE_EXPERIENCE_START,
  payload: { id, handleClose }
});

export const deleteExperienceSuccess = () => ({
  type: ExperiencesType.DELETE_EXPERIENCE_SUCCESS
});

export const deleteExperienceFailure = (error) => ({
  type: ExperiencesType.DELETE_EXPERIENCE_FAILURE,
  payload: error
});

export const uploadExperienceImgStart = (formData, imgCode) => ({
  type: ExperiencesType.UPLOAD_EXPERIENCE_START,
  payload: { formData, imgCode }
});

export const uploadExperienceImgSuccess = (imgCode, key) => ({
  type: ExperiencesType.UPLOAD_EXPERIENCE_SUCCESS,
  payload: { imgCode, key }
});

export const uploadExperienceImgFailure = (error) => ({
  type: ExperiencesType.UPLOAD_EXPERIENCE_FAILURE,
  payload: error
});
