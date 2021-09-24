import * as YachtsType from './yachts.types';

export const fetchYachtsStart = (data) => ({
  type: YachtsType.FETCH_YACHTS_START,
  payload: data
});

export const fetchYachtsSuccess = (result) => ({
  type: YachtsType.FETCH_YACHTS_SUCCESS,
  payload: result
});

export const fetchYachtsFailure = (error) => ({
  type: YachtsType.FETCH_YACHTS_FAILURE,
  payload: error
});
