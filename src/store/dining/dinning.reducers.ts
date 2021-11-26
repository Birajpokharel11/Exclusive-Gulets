import * as DiningType from './dinning.types';

import { IDinningState } from '../interfaces';

const INITIAL_STATE: IDinningState = {
  dining: [],
  error: null,
  slider_image: [],
  loading: false
};

const dinningReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DiningType.FETCH_DINING_START:
      return {
        ...state,
        loading: true
      };

    case DiningType.FETCH_DINING_SUCCESS:
      return {
        ...state,
        dining: payload,
        slider_image: payload.dining_images,
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
