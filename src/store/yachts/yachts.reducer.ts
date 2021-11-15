import { HYDRATE } from 'next-redux-wrapper';

import * as YachtsType from './yachts.types';

import { IYachtState } from '../interfaces';

const INITIAL_STATE: IYachtState = {
  yachtsList: [],
  adminYachtsList: [],
  soleYacht: {},
  error: null,
  loading: false,
  isCreating: false,
  isEditing: false
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

    default:
      return state;
  }
};

export default YachtsReducer;
