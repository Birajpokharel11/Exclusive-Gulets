import * as HomeType from './home.types';

import { IHomeState } from '../interfaces';

const INITIAL_STATE: IHomeState = {
  home: [],
  error: null,
  loading: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
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
