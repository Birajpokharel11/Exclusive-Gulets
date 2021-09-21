import { HYDRATE } from 'next-redux-wrapper';

import * as DestinationType from './offer.types';

const INITIAL_STATE = {
  destinations: [],
  error: null,
  loading: false
};

const destinationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };

    case DestinationType.FETCH_OFFER_START:
      return {
        ...state,
        loading: true
      };

    case DestinationType.FETCH_OFFER_SUCCESS:
      return {
        ...state,
        destinations: payload,
        loading: false
      };

    case DestinationType.FETCH_OFFER_FAILURE:
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
