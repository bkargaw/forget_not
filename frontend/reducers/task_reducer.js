import {RECEIVE_ALL_TASKS,
        RECEIVE_TASK,
        REMOVE_TASK} from '../actions/session_actions';

import {merge} from 'lodash';

const TaskReducer = (state = {} , action)=> {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return (merge({},action.tasks));
    case RECEIVE_TASK:
      return (merge({},state, {[action.task.id]: action.task}));
    case REMOVE_TASK:
      let newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
};

export default TaskReducer;
