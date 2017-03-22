import React from 'react';
import { connect } from 'react-redux';
import {getAllTasks, deleteTask} from '../../actions/tasks_actions';

import MainBody from './main_body';


const mapStateToProps = (state,ownProps) => {
  let indexType;
  if(ownProps.indexType){
  indexType = ownProps.indexType;
}else {
  indexType = 'all';
}
return({
  tasks: Object.keys(state.tasks).map(id => state.tasks[id]),
  indexType
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  if(ownProps.updateTasks){
    return ({
      getAllTasks: () => dispatch(getAllTasks()),
      deleteTask: (id) => dispatch(deleteTask(id)),
      updateTasks: () => dispatch(ownProps.updateTasks())
    });
  }
return ({
  getAllTasks: () => dispatch(getAllTasks())
});
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBody);
