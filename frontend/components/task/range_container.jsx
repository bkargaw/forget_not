import React from 'react';
import { connect } from 'react-redux';

import MainBody from './main_body';

import {getAllTasks,
        getTask,
        getAllTaskForToday,
        getAllTaskForTomorrow,
        getAllTaskForWeek,
        deleteTask,
        getAllListTasks} from '../../actions/tasks_actions';

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname.split('/');
  let indexType = path[path.length -1];
  return({
    tasks: Object.keys(state.tasks).map(id => state.tasks[id]),
    indexType
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  let updateTasks;
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
      // route --> '/task/listId'
      if(!ownProps.params.taskId){
        updateTasks = getAllListTasks;
        return({
          updateTasks: (listId) => dispatch(updateTasks(listId)),
          deleteTask: (id) => dispatch(deleteTask(id))
            });
      }else{
        let path = ownProps.location.pathname.split('/');
        switch (path[0] +'/'+ path[1] +'/'+ path[2]) {
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
            return({
              updateTasks: (listId) => dispatch(getAllListTasks(listId)),
              deleteTask: (id) => dispatch(deleteTask(id))
                });
          }

        return({
          getAllTasks: () => dispatch(updateTasks()),
          deleteTask: (id) => dispatch(deleteTask(id))
        });
      }

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
