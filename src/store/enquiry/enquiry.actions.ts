import * as HomeType from './enquiry.types';

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

////////////////////////////////////////////////////////////

export const fetchEnqueriesStart = () => ({
  type: HomeType.FETCH_ENQUERIES_START
});

export const fetchEnqueriesSuccess = (result) => ({
  type: HomeType.FETCH_ENQUERIES_SUCCESS,
  payload: result
});

export const fetchEnqueriesFailure = (error) => ({
  type: HomeType.FETCH_ENQUERIES_FAILURE,
  payload: error
});

///////////////////////////////////////////////////////////////

export const fetchEnqueriesByIdStart = (id) => ({
  type: HomeType.FETCH_ENQUERIES_By_Id_START,
  payload: id
});

export const fetchEnqueriesByIdSuccess = (result) => ({
  type: HomeType.FETCH_ENQUERIES_By_Id_Success,
  payload: result
});

export const fetchEnqueriesByIdFailure = (error) => ({
  type: HomeType.FETCH_ENQUERIES_By_Id_Failure,
  payload: error
});
