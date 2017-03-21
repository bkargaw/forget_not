import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions/tasks_actions';

import TaskForm from './task_form';


const mapDispatchToProps = (dispatch,ownProps) => {
return ({
  createTask: (task) => dispatch(createTask(task))
});
};

export default connect(
  null,
  mapDispatchToProps
)(TaskForm);
