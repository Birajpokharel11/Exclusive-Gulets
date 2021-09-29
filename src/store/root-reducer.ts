import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import siteCoordinatorReducer from './siteCoordinator/siteCoordinator.reducer';
import destinationReducer from './destination/destination.reducer';
import offerReducer from './offer/offer.reducer';
import blogReducer from './blogs/blog.reducer';
import experiencesReducer from './experiences/experiences.reducer';
import YachtsReducer from './yachts/yachts.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  destination: destinationReducer,
  offer: offerReducer,
  blogs: blogReducer,
  siteCoordinator: siteCoordinatorReducer,
  experience: experiencesReducer,
  yacht: YachtsReducer
});
export default rootReducer;
