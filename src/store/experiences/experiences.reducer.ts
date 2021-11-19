import { HYDRATE } from 'next-redux-wrapper';

import * as ExperiencesType from './experiences.types';

import { IExperienceState } from '../interfaces';

const INITIAL_STATE: IExperienceState = {
  experiences: [],
  soleExperience: {},
  error: null,
  loading: false,
  isCreating: false,
  isEditing: false,
  isDeleting: false,
  uploading: false
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

    case ExperiencesType.CREATE_EXPERIENCE_START:
      return {
        ...state,
        isCreating: true
      };

    case ExperiencesType.CREATE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        isCreating: false
      };

    case ExperiencesType.CREATE_EXPERIENCE_FAILURE:
      return {
        ...state,
        isCreating: false,
        error: payload
      };

    case ExperiencesType.EDIT_EXPERIENCE_START:
      return {
        ...state,
        isEditing: true
      };

    case ExperiencesType.EDIT_EXPERIENCE_SUCCESS:
      return {
        ...state,
        isEditing: false
      };

    case ExperiencesType.EDIT_EXPERIENCE_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: payload
      };

    case ExperiencesType.DELETE_EXPERIENCE_START:
      return {
        ...state,
        isDeleting: true
      };

    case ExperiencesType.DELETE_EXPERIENCE_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };

    case ExperiencesType.DELETE_EXPERIENCE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: payload
      };

    case ExperiencesType.UPLOAD_EXPERIENCE_START:
      return {
        ...state,
        uploading: true
      };

    case ExperiencesType.UPLOAD_EXPERIENCE_SUCCESS:
      return {
        ...state,
        uploading: false,
        soleExperience: {
          ...state.soleExperience,
          [payload.imgCode]: payload.key
        }
      };

    case ExperiencesType.UPLOAD_EXPERIENCE_FAILURE:
      return {
        ...state,
        uploading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default experiencesReducer;
