import * as DestinationType from './destination.types';

import { IDestinationState } from '../interfaces';

const INITIAL_STATE: IDestinationState = {
  destinations: [],
  next_page: 0,
  current_page: 0,
  randomDestination: [],
  destination: {},
  error: null,
  loading: false
};

const destinationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DestinationType.FETCH_DESTINATION_START:
      return {
        ...state,
        loading: true
      };

    case DestinationType.FETCH_DESTINATION_SUCCESS:
      return {
        ...state,
        destinations: [...state.destinations, ...payload],
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

    case DestinationType.FETCH_DESTINATION_BY_ID_START:
      return {
        ...state,
        loading: true
      };

    case DestinationType.FETCH_DESTINATION_BY_ID_SUCCESS:
      return {
        ...state,
        destination: payload,
        loading: false
      };

    case DestinationType.FETCH_DESTINATION_BY_ID_FAILURE:
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
