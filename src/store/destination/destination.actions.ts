import * as DestinationType from './destination.types';

import { IFetchDestination } from './destination.interfaces';

export const fetchDestinationStart = (data?: IFetchDestination) => ({
  type: DestinationType.FETCH_DESTINATION_START,
  payload: { ...data }
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

export const submitDestinationStart = (formData) => ({
  type: DestinationType.SUBMIT_DESTINATION_START,
  payload: { formData }
});

export const submitDestinationSuccess = (result) => ({
  type: DestinationType.SUBMIT_DESTINATION_SUCCESS,
  payload: result
});

export const submitDestinationFailure = (error) => ({
  type: DestinationType.SUBMIT_DESTINATION_FAIL,
  payload: error
});
