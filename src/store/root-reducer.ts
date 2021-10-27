import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import siteCoordinatorReducer from './siteCoordinator/siteCoordinator.reducer';
import destinationReducer from './destination/destination.reducer';
import offerReducer from './offer/offer.reducer';
import postsReducer from './posts/posts.reducer';
import experiencesReducer from './experiences/experiences.reducer';
import YachtsReducer from './yachts/yachts.reducer';
import HomeReducer from './home/home.reducer';
import alertReducer from './alert/alert.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  destination: destinationReducer,
  offer: offerReducer,
  posts: postsReducer,
  siteCoordinator: siteCoordinatorReducer,
  experience: experiencesReducer,
  yacht: YachtsReducer,
  home: HomeReducer,
  alert: alertReducer
});
export default rootReducer;
