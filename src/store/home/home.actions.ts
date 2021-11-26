import * as HomeType from './home.types';

export const fetchHomeStart = () => ({
  type: HomeType.FETCH_HOME_START
});

export const fetchHomeSuccess = (result) => ({
  type: HomeType.FETCH_HOME_SUCCESS,
  payload: result
});

export const fetchHomeFailure = (error) => ({
  type: HomeType.FETCH_HOME_FAILURE,
  payload: error
});

//////////////////////////////////////////////////////

export const submitEnquiryStart = (formData) => ({
  type: HomeType.SUBMIT_ENQUIRY_START,
  payload: { formData }
});

export const submitEnquirySuccess = (result) => ({
  type: HomeType.SUBMIT_ENQUIRY_SUCCESS,
  payload: result
});

export const submitEnquiryFailure = (error) => ({
  type: HomeType.SUBMIT_ENQUIRY_FAILURE,
  payload: error
});
