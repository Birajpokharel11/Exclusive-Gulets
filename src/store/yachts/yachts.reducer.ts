import { HYDRATE } from 'next-redux-wrapper';

import * as YachtsType from './yachts.types';

const INITIAL_STATE = {
  yachtsList: [],
  yacht: {},
  error: null,
  loading: false
};

const YachtsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.yacht };

    case YachtsType.FETCH_YACHTS_START:
      return {
        ...state,
        loading: true
      };

    case YachtsType.FETCH_YACHTS_SUCCESS:
      return {
        ...state,
        yachtsList: payload,
        loading: false
      };

    case YachtsType.FETCH_YACHTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case YachtsType.FETCH_YACHT_BY_ID_START:
      return {
        ...state,
        loading: true
      };

    case YachtsType.FETCH_YACHT_BY_ID_SUCCESS:
      return {
        ...state,
        yacht: payload,
        loading: false
      };

    case YachtsType.FETCH_YACHT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default YachtsReducer;