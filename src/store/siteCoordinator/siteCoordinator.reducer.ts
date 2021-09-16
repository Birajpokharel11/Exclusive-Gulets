import { HYDRATE } from 'next-redux-wrapper';

import * as SiteCoordinatorType from './siteCoordinator.types';

const INITIAL_STATE = {
  language: 'nl'
};

const siteCoordinatorReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  let updatedState;

  switch (type) {
    case HYDRATE:
      return { ...state, ...payload };
    case SiteCoordinatorType.LANGUAGE_CHANGE:
      console.log('changed language>>', payload);
      updatedState = {
        ...state,
        language: payload
      };
      return updatedState;

    default:
      return state;
  }
};

export default siteCoordinatorReducer;
