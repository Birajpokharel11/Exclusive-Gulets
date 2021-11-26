import * as HomeType from './enquiry.types';

const INITIAL_STATE = {
  enquiries: [],
  error: null,
  loading: false
};

const homeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case HomeType.SUBMIT_ENQUIRY_START:
      return {
        ...state,
        loading: true
      };

    case HomeType.SUBMIT_ENQUIRY_SUCCESS:
      return {
        ...state,
        home: payload,
        loading: false
      };

    case HomeType.SUBMIT_ENQUIRY_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    case HomeType.FETCH_ENQUERIES_START:
      return {
        ...state,
        loading: true
      };

    case HomeType.FETCH_ENQUERIES_SUCCESS:
      return {
        ...state,
        enquiries: payload,
        loading: false
      };

    case HomeType.FETCH_ENQUERIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
};

export default homeReducer;
