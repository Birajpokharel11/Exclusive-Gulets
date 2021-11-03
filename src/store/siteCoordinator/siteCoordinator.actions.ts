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

export const checkDomainStart = (domainName) => ({
  type: SiteCoordinatorType.CHECK_DOMAIN_START,
  payload: { domainName }
});

export const checkDomainSuccess = (result) => ({
  type: SiteCoordinatorType.CHECK_DOMAIN_SUCCESS,
  payload: result
});

export const checkDomainFail = (error) => ({
  type: SiteCoordinatorType.CHECK_DOMAIN_FAILURE,
  payload: error
});
