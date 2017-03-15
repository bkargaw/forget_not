import {RECEIVE_ERRORS,
        RECEIVE_CURRENT_USER,
        REMOVE_ERRORS} from '../actions/session_actions';
import {merge} from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};
const sessionReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return (merge({},state,{currentUser: action.currentUser},{errors: []}));
    case RECEIVE_ERRORS:
      return (merge({},state,{currentUser: null},{errors: action.errors.responseJSON}));
    case REMOVE_ERRORS:
      return (Object.assign({}, state, {errors: []}));
    default:
      return state;
  }
};

export default sessionReducer;
