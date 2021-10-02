import * as YachtsType from './yachts.types';

export const fetchYachtsStart = () => ({
  type: YachtsType.FETCH_YACHTS_START
});

export const fetchYachtsSuccess = (result) => ({
  type: YachtsType.FETCH_YACHTS_SUCCESS,
  payload: result
});

export const fetchYachtsFailure = (error) => ({
  type: YachtsType.FETCH_YACHTS_FAILURE,
  payload: error
});

export const fetchYachtByIdStart = (id, user_id) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_START,
  payload: { id, user_id }
});

export const fetchYachtByIdSuccess = (result) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_SUCCESS,
  payload: result
});

export const fetchYachtByIdFailure = (error) => ({
  type: YachtsType.FETCH_YACHT_BY_ID_FAILURE,
  payload: error
});
