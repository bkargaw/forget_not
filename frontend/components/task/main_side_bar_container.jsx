import React from 'react';
import { connect } from 'react-redux';
import MainSideBar from './main_side_bar';
import { getAllLists,
         getList,
         createList,
         updateList,
         deleteList} from '../../actions/list_actions';

const mapStateToProps = state => {
return({
  currentUser: state.session.currentUser,
  lists: Object.keys(state.lists).map(id => state.lists[id])
});
};
const mapDispatchToProps = dispatch => ({
  getAllLists: () => dispatch(getAllLists()),
  getList: (id) => dispatch(getList(id)),
  deleteList: (id) => dispatch(deleteList(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSideBar);
