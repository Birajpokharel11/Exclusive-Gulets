import { applyMiddleware, createStore, Middleware, StoreEnhancer } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga';

import combinedReducer from './root-reducer';
import rootSaga from './root-saga';

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = { ...state, ...action.payload };
    return nextState;
  }

  return combinedReducer(state, action);
};

export const makeStore = (context) => {
  // 1: Create the middleware
  const sagaMiddleware = createSagaMiddleware();

  // 2: Add an extra parameter for applying middleware:
  const store = createStore(reducer, bindMiddleware([sagaMiddleware]));

  // 3: Run your sagas on server
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // 4: now return the store:
  return store;
};

export const wrapper = createWrapper(makeStore);
