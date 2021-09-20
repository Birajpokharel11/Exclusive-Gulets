import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/auth.sagas';
import { destinationSagas } from './destination/destination.sagas';

export default function* rootSaga() {
  yield all([call(authSagas), call(destinationSagas)]);
}
