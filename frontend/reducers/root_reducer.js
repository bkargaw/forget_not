import {combineReducers} from 'redux';
import sessionReducer from './session_reducer';
import {reducer as modalReducer} from 'react-redux-modal';

export default combineReducers({
  session: sessionReducer,
  modals: modalReducer
});
