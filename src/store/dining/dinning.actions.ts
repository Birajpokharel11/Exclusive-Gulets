import * as DiningType from './dinning.types';

export const fetchDiningStart = () => ({
  type: DiningType.FETCH_DINING_START
});

export const fetchDiningSuccess = (result) => ({
  type: DiningType.FETCH_DINING_SUCCESS,
  payload: result
});

export const fetchDiningFailure = (error) => ({
  type: DiningType.FETCH_DINING_FAILURE,
  payload: error
});
