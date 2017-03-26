import React from 'react';
import { connect } from 'react-redux';
import { createTask } from '../../actions/tasks_actions';

import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
return({
  lists: Object.keys(state.lists).map(id => state.lists[id])
});
};
const mapDispatchToProps = (dispatch,ownProps) => {
return ({
  createTask: (task) => dispatch(createTask(task))
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskForm);
