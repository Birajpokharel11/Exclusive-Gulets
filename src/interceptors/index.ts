import axios from 'axios';

import { responseErrorMessage } from '@utils/misc';

export default (store) => {
  // req
  axios.interceptors.request.use((req) => {
    // console.log(`${req.method} ${req.url}`);

    // Important: request interceptors **must** return the request.
    return req;
  });

  // res
  axios.interceptors.response.use(
    (res) => {
      return res;
    },
    (err) => {
      if (err.response) {
        const { status } = err.response;
        const errorMessage = responseErrorMessage(status);

        // console.log('interceptor errorMessage', errorMessage);
        // dispatch(setError(errorMessage));
      }
      return Promise.reject(err);
    }
  );
};
