import { HYDRATE } from 'next-redux-wrapper';

import * as HomeType from './home.types';

const INITIAL_STATE = {
  home: [],
  error: null,
  loading: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.home };

    case HomeType.FETCH_HOME_START:
      return {
        ...state,
        loading: true
      };

    case HomeType.FETCH_HOME_SUCCESS:
      return {
        ...state,
        home: payload,
        loading: false
      };

    case HomeType.FETCH_HOME_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default homeReducer;
