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

export const createExperienceStart = (formData) => ({
  type: ExperiencesType.CREATE_EXPERIENCE_START,
  payload: { formData }
});

export const createExperienceSuccess = () => ({
  type: ExperiencesType.CREATE_EXPERIENCE_SUCCESS
});

export const createExperienceFailure = (error) => ({
  type: ExperiencesType.CREATE_EXPERIENCE_FAILURE,
  payload: error
});

export const editExperienceStart = (formData) => ({
  type: ExperiencesType.EDIT_EXPERIENCE_START,
  payload: { formData }
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
