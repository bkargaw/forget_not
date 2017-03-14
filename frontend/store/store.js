import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import  thunk  from 'redux-thunk';

const configureStore = (preLoadedState) =>(
  createStore(rootReducer, preLoadedState, applyMiddleware(thunk))
);

export default configureStore;
