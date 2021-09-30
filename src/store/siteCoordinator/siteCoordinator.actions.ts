/* eslint-disable import/prefer-default-export */
import * as SiteCoordinatorType from './siteCoordinator.types';

export const languageChange = (language) => ({
  type: SiteCoordinatorType.LANGUAGE_CHANGE,
  payload: language
});

export const storeYacht = (data) => ({
  type: SiteCoordinatorType.STORE_YACHT,
  payload: data
});
