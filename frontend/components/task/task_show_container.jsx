import React from 'react';
import { connect } from 'react-redux';
import {getTask, updateTask} from '../../actions/tasks_actions';

import mainShowSection from './main_show_section';

const mapStateToProps = (state, ownProps) =>  {
  return({
    task: state.tasks[ownProps.params.taskId],
    lists: state.lists
  });
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  getTask: (id) => dispatch(getTask(id)),
  updateTask: (id) => dispatch(updateTask(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainShowSection);
