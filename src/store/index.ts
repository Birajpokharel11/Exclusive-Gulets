import {
  applyMiddleware,
  createStore,
  Middleware,
  AnyAction,
  StoreEnhancer,
  Store
} from 'redux';
import { createWrapper, Context, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import combinedReducer, { RootState } from './root-reducer';
import rootSaga from './root-saga';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: RootState, action: AnyAction) => {
  if (action.type === HYDRATE) {
    const clientState = { ...state };
    const serverState = { ...action.payload };
    const nextState = { ...clientState, ...serverState };

    const auth = { ...state.auth };
    const siteCoordinator = {
      ...clientState.siteCoordinator,
      ...serverState.siteCoordinator
    };

    if (state) {
      nextState.auth = auth;
      nextState.siteCoordinator = siteCoordinator;
    }

    return nextState;
  }

  return combinedReducer(state, action);
};

export const makeStore = (context: Context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper<Store<RootState>>(makeStore);
