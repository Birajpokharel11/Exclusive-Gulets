import { HYDRATE } from 'next-redux-wrapper';

import * as SiteCoordinatorType from './siteCoordinator.types';

const INITIAL_STATE = {
  language: 'en',
  yachtStore: {},
  domain: {
    isExists: false,
    data: null
  },
  loading: true
};

const siteCoordinatorReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  let updatedState;

  switch (type) {
    case SiteCoordinatorType.LANGUAGE_CHANGE:
      updatedState = {
        ...state,
        language: payload
      };
    case SiteCoordinatorType.STORE_YACHT:
      updatedState = {
        ...state,
        yachtStore: payload
      };
      return updatedState;

    case SiteCoordinatorType.CHECK_DOMAIN_START:
      return {
        ...state,
        loading: true
      };

    case SiteCoordinatorType.CHECK_DOMAIN_SUCCESS:
      return {
        ...state,
        domain: payload,
        loading: false
      };

    case SiteCoordinatorType.CHECK_DOMAIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    default:
      return state;
  }
};

export default siteCoordinatorReducer;
