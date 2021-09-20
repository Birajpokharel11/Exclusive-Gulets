import { combineReducers } from 'redux';

import authReducer from './auth/auth.reducer';
import siteCoordinatorReducer from './siteCoordinator/siteCoordinator.reducer';
import destinationReducer from './destination/destination.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  destination: destinationReducer,
  siteCoordinator: siteCoordinatorReducer
});
export default rootReducer;
