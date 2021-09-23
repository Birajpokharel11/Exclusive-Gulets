import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import siteCoordinatorReducer from './siteCoordinator/siteCoordinator.reducer';
import destinationReducer from './destination/destination.reducer';
import offerReducer from './offer/offer.reducer';
import postsReducer from './posts/posts.reducer';
import experiencesReducer from './experiences/experiences.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  destination: destinationReducer,
  offer: offerReducer,
  posts: postsReducer,
  siteCoordinator: siteCoordinatorReducer,
  experience: experiencesReducer
});
export default rootReducer;
