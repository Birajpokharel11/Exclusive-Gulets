import { HYDRATE } from 'next-redux-wrapper';

import * as charterType from './charter.types';

import { IDinningState } from '../interfaces';

const INITIAL_STATE = {
  charter_content: {},
  general_content: {},
  why_charter_images: {},
  error: null,
  loading: false
};

const charterReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.about };

    case charterType.FETCH_CHARTER_START:
      return {
        ...state,
        loading: true
      };

    case charterType.FETCH_CHARTER_SUCCESS:
      return {
        ...state,
        charter_content: payload.why_charter,
        general_content: payload.general,
        why_charter_images: payload.why_charter_images,
        loading: false
      };

    case charterType.FETCH_CHARTER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default charterReducer;
