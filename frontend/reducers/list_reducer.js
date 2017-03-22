import {RECEIVE_ALL_LISTS,
        RECEIVE_LIST,
        REMOVE_LIST} from '../actions/list_actions';

import {merge} from 'lodash';

const listReducer = (state = {} , action)=> {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_LISTS:
      return merge({},action.lists);
    case RECEIVE_LIST:
      return merge({}, state, {[action.list.id]: action.list});
    case REMOVE_LIST:
      newState = merge({}, state);
      delete newState[action.list.id];
      return newState;
    default:
    return state;
  }
};
