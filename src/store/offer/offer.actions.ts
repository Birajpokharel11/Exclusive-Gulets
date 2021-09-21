import * as OfferType from './offer.types';

export const fetchOfferStart = () => ({
  type: OfferType.FETCH_OFFER_START
});

export const fetchOfferSuccess = (result) => ({
  type: OfferType.FETCH_OFFER_SUCCESS,
  payload: result
});

export const fetchOfferFailure = (error) => ({
  type: OfferType.FETCH_OFFER_FAILURE,
  payload: error
});
