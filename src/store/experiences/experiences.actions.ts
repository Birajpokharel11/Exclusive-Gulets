import * as ExperiencesType from './experiences.types';

export const fetchExperiencesStart = () => ({
  type: ExperiencesType.FETCH_EXPERIENCES_START
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
