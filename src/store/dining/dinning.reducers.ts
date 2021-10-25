import { HYDRATE } from 'next-redux-wrapper';

import * as DiningType from './dinning.types';

import { IDinningState } from '../interfaces';

const INITIAL_STATE: IDinningState = {
  dining: [],
  error: null,
  loading: false
};

const dinningReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.dining };

    case DiningType.FETCH_DINING_START:
      return {
        ...state,
        loading: true
      };

    case DiningType.FETCH_DINING_SUCCESS:
      return {
        ...state,
        dining: payload,
        loading: false
      };

    case DiningType.FETCH_DINING_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default dinningReducer;
