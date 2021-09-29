import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/auth.sagas';
import { destinationSagas } from './destination/destination.sagas';
import { offerSagas } from './offer/offer.sagas';
import { experiencesSagas } from './experiences/experiences.sagas';
import { yachtsSagas } from './yachts/yachts.sagas';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(destinationSagas),
    call(offerSagas),
    call(experiencesSagas),
    call(yachtsSagas)
  ]);
}
