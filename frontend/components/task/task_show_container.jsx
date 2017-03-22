import React from 'react';
import { connect } from 'react-redux';
import {getTask, updatTask} from '../../actions/tasks_actions';

import mainShowSection from './main_show_section';

const mapStateToProps = (state, ownProps) =>  {
  return({
    task: state.tasks[ownProps.params.taskId]
  });
};



const mapDispatchToProps = (dispatch,ownProps) => ({
  getTask: (id) => dispatch(getTask(id)),
  updatTask: (task) => dispatch(updatTask(task))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(mainShowSection);
