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
