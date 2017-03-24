import React from 'react';
import { connect } from 'react-redux';
import {getTask,
        updateTask} from '../../actions/tasks_actions';
import { selectTaskStat } from '../../reducers/selector';

import MainShowSection from './main_show_section';

const mapStateToProps = (state,ownProps) =>{
  let path =  ownProps.location.pathname.split('/');
  let title;
    if( parseInt(path[path.length - 1]) && Object.keys(state.lists).length ){
      title = state.lists[parseInt( path[path.length - 1] )].name;
    }else if(parseInt(path[path.length - 1])) {
      title = path[path.length - 2];
    }else {
        title = path[path.length - 1];
    }
return({
  status: selectTaskStat(state.tasks),
  title
});
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  getTask: (id) => dispatch(getTask(id)),
  updateTask: (task) => dispatch(updateTask(task))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShowSection);
