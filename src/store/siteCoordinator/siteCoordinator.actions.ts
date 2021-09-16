/* eslint-disable import/prefer-default-export */
import * as SiteCoordinatorType from './siteCoordinator.types';

export const languageChange = (language) => ({
  type: SiteCoordinatorType.LANGUAGE_CHANGE,
  payload: language
});
