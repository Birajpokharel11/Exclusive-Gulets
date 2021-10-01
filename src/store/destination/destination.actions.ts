import * as DestinationType from './destination.types';

export const fetchDestinationStart = ({ page, amount_per_page = 5 }) => ({
  type: DestinationType.FETCH_DESTINATION_START,
  payload: { page, amount_per_page }
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

export const fetchDestinationByIdStart = (id) => ({
  type: DestinationType.FETCH_DESTINATION_BY_ID_START,
  payload: { id }
});

export const fetchDestinationByIdSuccess = (result) => ({
  type: DestinationType.FETCH_DESTINATION_BY_ID_SUCCESS,
  payload: result
});

export const fetchDestinationByIdFailure = (error) => ({
  type: DestinationType.FETCH_DESTINATION_BY_ID_FAILURE,
  payload: error
});
