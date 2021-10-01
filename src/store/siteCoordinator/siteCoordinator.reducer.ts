import { HYDRATE } from 'next-redux-wrapper';

import * as SiteCoordinatorType from './siteCoordinator.types';

const INITIAL_STATE = {
  language: 'nl',
  yachtStore: {}
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

    default:
      return state;
  }
};

export default siteCoordinatorReducer;
