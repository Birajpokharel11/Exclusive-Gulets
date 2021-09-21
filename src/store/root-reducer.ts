import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import siteCoordinatorReducer from './siteCoordinator/siteCoordinator.reducer';
import destinationReducer from './destination/destination.reducer';
import offerReducer from './offer/offer.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  destination: destinationReducer,
  offer: offerReducer,
  siteCoordinator: siteCoordinatorReducer
});
export default rootReducer;
