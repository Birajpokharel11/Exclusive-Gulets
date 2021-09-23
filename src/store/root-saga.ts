import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/auth.sagas';
import { destinationSagas } from './destination/destination.sagas';
import { offerSagas } from './offer/offer.sagas';
import { postsSagas } from './posts/posts.sagas';
import { experiencesSagas } from './experiences/experiences.sagas';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(destinationSagas),
    call(offerSagas),
    call(postsSagas),
    call(experiencesSagas)
  ]);
}
