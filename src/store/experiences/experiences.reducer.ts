import { HYDRATE } from 'next-redux-wrapper';

import * as ExperiencesType from './experiences.types';

import { IExperienceState } from '../interfaces';

const INITIAL_STATE: IExperienceState = {
  experiences: [],
  soleExperience: {},
  error: null,
  loading: false
};

const experiencesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.experience };

    case ExperiencesType.FETCH_EXPERIENCES_START:
      return {
        ...state,
        loading: true
      };

    case ExperiencesType.FETCH_EXPERIENCES_SUCCESS:
      return {
        ...state,
        experiences: payload,
        loading: false
      };

    case ExperiencesType.FETCH_EXPERIENCES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case ExperiencesType.FETCH_EXPERIENCE_BY_ID_START:
      return {
        ...state,
        loading: true
      };

    case ExperiencesType.FETCH_EXPERIENCE_BY_ID_SUCCESS:
      return {
        ...state,
        soleExperience: payload,
        loading: false
      };

    case ExperiencesType.FETCH_EXPERIENCE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default experiencesReducer;
