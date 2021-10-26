import * as charterType from './charter.types';

export const fetchCharterStart = () => ({
  type: charterType.FETCH_CHARTER_START
});

export const fetchCharterSuccess = (result) => ({
  type: charterType.FETCH_CHARTER_SUCCESS,
  payload: result
});

export const fetchCharterFailure = (error) => ({
  type: charterType.FETCH_CHARTER_FAILURE,
  payload: error
});
