import * as OfferType from './offer.types';

import { IOfferState } from '../interfaces';

const INITIAL_STATE: IOfferState = {
  offers: [],
  genericOffers: [],
  error: null,
  loading: false,
  isCreating: false,
  isFetching: false,
  isDeleting: false,
  isEditing: false,
  soleOffer: {}
};

const destinationReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case OfferType.FETCH_OFFER_START:
      return {
        ...state,
        loading: true
      };

    case OfferType.FETCH_OFFER_SUCCESS:
      return {
        ...state,
        genericOffers: payload,
        loading: false
      };

    case OfferType.FETCH_OFFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case OfferType.CREATE_GENERIC_OFFER_START:
      return {
        ...state,
        isCreating: true
      };

    case OfferType.CREATE_GENERIC_OFFER_SUCCESS:
      return {
        ...state,
        isCreating: false
      };

    case OfferType.CREATE_GENERIC_OFFER_FAILURE:
      return {
        ...state,
        isCreating: false,
        error: payload
      };

    case OfferType.FETCH_GENERIC_OFFER_BY_ID_START:
      return {
        ...state,
        isFetching: true
      };

    case OfferType.FETCH_GENERIC_OFFER_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        soleOffer: payload
      };

    case OfferType.FETCH_GENERIC_OFFER_BY_ID_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case OfferType.DELETE_GENERIC_OFFER_START:
      return {
        ...state,
        isDeleting: true
      };

    case OfferType.DELETE_GENERIC_OFFER_SUCCESS:
      return {
        ...state,
        isDeleting: false
      };

    case OfferType.DELETE_GENERIC_OFFER_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: payload
      };

    case OfferType.EDIT_GENERIC_OFFER_START:
      return {
        ...state,
        isEditing: true
      };

    case OfferType.EDIT_GENERIC_OFFER_SUCCESS:
      return {
        ...state,
        isEditing: false
      };

    case OfferType.EDIT_GENERIC_OFFER_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: payload
      };

    default:
      return state;
  }
};

export default destinationReducer;
