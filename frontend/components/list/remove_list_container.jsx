import React from 'react';
import { connect } from 'react-redux';
import RemoveList from './remove_list.jsx';

import { deleteList } from '../../actions/list_actions';
import { deleteTask, getAllListTasks } from '../../actions/tasks_actions';
import { fetchAllListsTypeTasks } from '../../actions/tasks_actions';

const mapDispatchToProps = (dispatch, ownProps)=> {
return ({
  deleteList: (list) => dispatch(deleteList(list)),
  getAllListTasks: (id) => dispatch(getAllListTasks(ownProps.id)),
  deleteTask: (id) => dispatch(deleteTask(id))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(RemoveList);
