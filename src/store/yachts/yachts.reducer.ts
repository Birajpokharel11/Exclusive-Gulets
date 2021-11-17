import { HYDRATE } from 'next-redux-wrapper';

import * as YachtsType from './yachts.types';

import { IYachtState } from '../interfaces';

const INITIAL_STATE: IYachtState = {
  yachtsList: [],
  adminYachtsList: [],
  soleYacht: {},
  flagList: [],
  countryList: [],
  yachtFeaturesList: [],
  waterToysList: [],
  extrasList: [],
  inclusiveTermList: [],
  homePortList: [],
  error: null,
  loading: false,
  isCreating: false,
  isEditing: false,
  isFetching: false
};

const YachtsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HYDRATE:
      return { ...state, ...payload.yacht };

    case YachtsType.FETCH_YACHTS_START:
      return {
        ...state,
        loading: true
      };

    case YachtsType.FETCH_YACHTS_SUCCESS:
      return {
        ...state,
        yachtsList: payload,
        loading: false
      };

    case YachtsType.FETCH_YACHTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case YachtsType.FETCH_ADMIN_YACHTS_START:
      return {
        ...state,
        loading: true
      };

    case YachtsType.FETCH_ADMIN_YACHTS_SUCCESS:
      return {
        ...state,
        adminYachtsList: payload,
        loading: false
      };

    case YachtsType.FETCH_ADMIN_YACHTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case YachtsType.FETCH_YACHT_BY_ID_START:
      return {
        ...state,
        loading: true
      };

    case YachtsType.FETCH_YACHT_BY_ID_SUCCESS:
      return {
        ...state,
        soleYacht: payload,
        loading: false
      };

    case YachtsType.FETCH_YACHT_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case YachtsType.CREATE_YACHT_START:
      return {
        ...state,
        isCreating: true
      };

    case YachtsType.CREATE_YACHT_SUCCESS:
      return {
        ...state,
        isCreating: false
      };

    case YachtsType.CREATE_YACHT_FAILURE:
      return {
        ...state,
        isCreating: false,
        error: payload
      };

    case YachtsType.EDIT_YACHT_START:
      return {
        ...state,
        isEditing: true
      };

    case YachtsType.EDIT_YACHT_SUCCESS:
      return {
        ...state,
        isEditing: false
      };

    case YachtsType.EDIT_YACHT_FAILURE:
      return {
        ...state,
        isEditing: false,
        error: payload
      };

    case YachtsType.FETCH_FLAG_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_FLAG_SUCCESS:
      return {
        ...state,
        isFetching: false,
        flagList: payload
      };

    case YachtsType.FETCH_FLAG_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case YachtsType.FETCH_COUNTRY_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_COUNTRY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        countryList: payload
      };

    case YachtsType.FETCH_COUNTRY_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case YachtsType.FETCH_HOMEPORT_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_HOMEPORT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        homePortList: payload
      };

    case YachtsType.FETCH_HOMEPORT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case YachtsType.FETCH_WATERTOYS_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_WATERTOYS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        waterToysList: payload
      };

    case YachtsType.FETCH_WATERTOYS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case YachtsType.FETCH_INCLUSIVETERM_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_INCLUSIVETERM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        inclusiveTermList: payload
      };

    case YachtsType.FETCH_INCLUSIVETERM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case YachtsType.FETCH_EXTRAS_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_EXTRAS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        extrasList: payload
      };

    case YachtsType.FETCH_EXTRAS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case YachtsType.FETCH_YACHT_FEATURES_START:
      return {
        ...state,
        isFetching: true
      };

    case YachtsType.FETCH_YACHT_FEATURES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        yachtFeaturesList: payload
      };

    case YachtsType.FETCH_YACHT_FEATURES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    default:
      return state;
  }
};

export default YachtsReducer;
