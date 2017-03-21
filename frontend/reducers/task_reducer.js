import {RECEIVE_ALL_TASKS,
        RECEIVE_TASK,
        REMOVE_TASK} from '../actions/tasks_actions';

import {merge} from 'lodash';

const TaskReducer = (state = {} , action)=> {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      newState = merge({},action.tasks);
      return (newState);
    case RECEIVE_TASK:
      return (merge({},state, {[action.task.id]: action.task}));
    case REMOVE_TASK:
       newState = merge({}, state);
      delete newState[action.task.id];
      return newState;
    default:
      return state;
  }
};

export default TaskReducer;
