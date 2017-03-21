import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import  thunk  from 'redux-thunk';

import createLogger from 'redux-logger';

const configureStore = (preLoadedState) =>(
  createStore(rootReducer, preLoadedState,
              applyMiddleware(thunk, createLogger()))
);

export default configureStore;
