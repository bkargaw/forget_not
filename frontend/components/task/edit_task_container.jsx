import React from 'react';
import { connect } from 'react-redux';
import {getTask, updateTask} from '../../actions/tasks_actions';


import EditTask from './edit_task';

const mapStateToProps = (state, ownProps) =>  {
  return({
    task: ownProps.task,
    path: ownProps.path,
    lists: state.lists
  });
};



const mapDispatchToProps = (dispatch,ownProps) =>{
  debugger;
  return({
  updateTask: (task) => dispatch(updateTask(task))
});
};


export default connect(
  mapStateToProps,
  null
)(EditTask);
