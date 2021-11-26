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

export const createGenericOfferStart = (formData) => ({
  type: OfferType.CREATE_GENERIC_OFFER_START,
  payload: { formData }
});

export const createGenericOfferSuccess = (result) => ({
  type: OfferType.CREATE_GENERIC_OFFER_SUCCESS,
  payload: result
});

export const createGenericOfferFailure = (error) => ({
  type: OfferType.CREATE_GENERIC_OFFER_FAILURE,
  payload: error
});

export const fetchGenericOfferByIdStart = (id) => ({
  type: OfferType.FETCH_GENERIC_OFFER_BY_ID_START,
  payload: { id }
});

export const fetchGenericOfferByIdSuccess = (result) => ({
  type: OfferType.FETCH_GENERIC_OFFER_BY_ID_SUCCESS,
  payload: result
});

export const fetchGenericOfferByIdFailure = (error) => ({
  type: OfferType.FETCH_GENERIC_OFFER_BY_ID_FAILURE,
  payload: error
});

export const deleteGenericOfferStart = (id, handleClose) => ({
  type: OfferType.DELETE_GENERIC_OFFER_START,
  payload: { id, handleClose }
});

export const deleteGenericOfferSuccess = (result) => ({
  type: OfferType.DELETE_GENERIC_OFFER_SUCCESS,
  payload: result
});

export const deleteGenericOfferFailure = (error) => ({
  type: OfferType.DELETE_GENERIC_OFFER_FAILURE,
  payload: error
});

export const editGenericOfferStart = (formData) => ({
  type: OfferType.EDIT_GENERIC_OFFER_START,
  payload: { formData }
});

export const editGenericOfferSuccess = (result) => ({
  type: OfferType.EDIT_GENERIC_OFFER_SUCCESS,
  payload: result
});

export const editGenericOfferFailure = (error) => ({
  type: OfferType.EDIT_GENERIC_OFFER_FAILURE,
  payload: error
});
