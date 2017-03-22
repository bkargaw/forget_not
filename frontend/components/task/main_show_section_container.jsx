import React from 'react';
import { connect } from 'react-redux';
import {getTask} from '../../actions/tasks_actions';
import { selectTaskStat } from '../../reducers/selector';

import MainShowSection from './main_show_section';

const mapStateToProps = (state,ownProps) =>{
return({
  status: selectTaskStat(state.tasks),
  title: 'All Tasks'
});
};

const mapDispatchToProps = (dispatch,ownProps) => ({
  getTask: (id) => dispatch(getTask(id))
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainShowSection);
