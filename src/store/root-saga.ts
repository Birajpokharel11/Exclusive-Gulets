import { all, call } from 'redux-saga/effects';

import { authSagas } from './auth/auth.sagas';
import { destinationSagas } from './destination/destination.sagas';
import { offerSagas } from './offer/offer.sagas';
import { experiencesSagas } from './experiences/experiences.sagas';
import { yachtsSagas } from './yachts/yachts.sagas';
import { postsSagas } from './posts/posts.sagas';
import { homeSagas } from './home/home.sagas';
import { dinningSagas } from './dining/dinning.sagas';
import { charterSagas } from './whyCharter/charter.sagas';

export default function* rootSaga() {
  yield all([
    call(authSagas),
    call(destinationSagas),
    call(offerSagas),
    call(experiencesSagas),
    call(yachtsSagas),
    call(postsSagas),
    call(homeSagas),
    call(dinningSagas),
    call(charterSagas)
  ]);
}
