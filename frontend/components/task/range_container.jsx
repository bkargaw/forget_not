import React from 'react';
import { connect } from 'react-redux';

import MainBody from './main_body';

import {getAllTasks,
        getAllTaskForToday,
        getAllTaskForTomorrow,
        getAllTaskForWeek,
        deleteTask,
        getAllListTasks} from '../../actions/tasks_actions';

import { getAllLists } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname.split('/');
  let indexType = path[path.length -1];
  return({
    tasks: Object.keys(state.tasks).map(id => state.tasks[id]),
    indexType
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  let updateTasks = getAllTasks;
  switch (ownProps.location.pathname) {
    case '/tasks/all':
      updateTasks = getAllTasks;
      break;
    case '/tasks/today':
      updateTasks = getAllTaskForToday;
      break;
    case '/tasks/tomorrow':
      updateTasks = getAllTaskForTomorrow;
      break;
    case '/tasks/week':
      updateTasks = getAllTaskForWeek;
      break;
    default:
    // route --> 'task/listId'
      updateTasks = getAllListTasks;
      return({
        updateTasks: (listId) => dispatch(updateTasks(listId)),
        deleteTask: (id) => dispatch(deleteTask(id))
      });
  }
  return({
    updateTasks: () => dispatch(updateTasks()),
    deleteTask: (id) => dispatch(deleteTask(id))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBody);
