import { HYDRATE } from 'next-redux-wrapper';

import * as DestinationType from './destination.types';

const INITIAL_STATE = {
  destinationIds: [],
  destinations: {},
  next_page: 0,
  current_page: 0,
  featured_destination: {},
  error: null,
  loading: false
};

const destinationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.destination };
    case DestinationType.FETCH_DESTINATION_START:
      return {
        ...state,
        loading: true
      };

    case DestinationType.FETCH_DESTINATION_SUCCESS:
      return {
        ...state,
        destinations: payload,
        loading: false
      };

    case DestinationType.FETCH_DESTINATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case DestinationType.FETCH_RANDOM_DESTINATION_START:
      return {
        ...state,
        loading: true
      };

    case DestinationType.FETCH_RANDOM_DESTINATION_SUCCESS:
      return {
        ...state,
        randomDestination: payload,
        loading: false
      };

    case DestinationType.FETCH_RANDOM_DESTINATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default destinationReducer;
