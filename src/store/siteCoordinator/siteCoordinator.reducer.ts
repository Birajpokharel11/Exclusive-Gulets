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
      console.log('changed language>>', payload);
      updatedState = {
        ...state,
        language: payload
      };
    case SiteCoordinatorType.STORE_YACHT:
      console.log('STORE_YACHT reducer>>', payload);
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
