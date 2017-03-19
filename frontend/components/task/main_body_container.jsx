import React from 'react';
import { connect } from 'react-redux';
import {receiveAllTasks} from '../../actions/tasks_actions';
import MainBody from './main_body';

const mapStateToProps = state => ({
  tasks: Object.keys(state.tasks).map(id => state.tasks[id])
});

const mapDispatchToProps = dispatch => ({
  receiveAllTasks: () => dispatch(receiveAllTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainBody);
