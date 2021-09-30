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
