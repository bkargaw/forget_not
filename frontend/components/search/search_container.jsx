import React from 'react';
import { connect } from 'react-redux';

import MainBody from '../task/main_body';

import {searchByTaskTitle,
        deleteTask,
        updateTask} from '../../actions/tasks_actions';

const mapStateToProps = (state, ownProps) => {
  let path = ownProps.location.pathname.split('/');
  let indexType =  'search/'+path[path.length - 1];
  return({
    tasks: Object.keys(state.tasks).map(id => state.tasks[id]),
    indexType
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  return ({
    deleteTask: (id) => dispatch(deleteTask(id)),
    updateTask: (task) => dispatch(updateTask(task)),
    updateTasks: () => dispatch(searchByTaskTitle(ownProps.params.prefix))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBody);
