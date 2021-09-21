import * as DestinationType from './destination.types';

export const fetchDestinationStart = (data) => ({
  type: DestinationType.FETCH_DESTINATION_START,
  payload: data
});

export const fetchDestinationSuccess = (result) => ({
  type: DestinationType.FETCH_DESTINATION_SUCCESS,
  payload: result
});

export const fetchDestinationFailure = (error) => ({
  type: DestinationType.FETCH_DESTINATION_FAILURE,
  payload: error
});

export const fetchRandomDestinationStart = () => ({
  type: DestinationType.FETCH_RANDOM_DESTINATION_START
});

export const fetchRandomDestinationSuccess = (result) => ({
  type: DestinationType.FETCH_RANDOM_DESTINATION_SUCCESS,
  payload: result
});

export const fetchRandomDestinationFailure = (error) => ({
  type: DestinationType.FETCH_RANDOM_DESTINATION_FAILURE,
  payload: error
});
