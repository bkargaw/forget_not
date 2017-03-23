import React from 'react';
import { connect } from 'react-redux';
import editLists from './edit_list';

import { updateList } from '../../actions/list_actions';


const mapDispatchToProps = (dispatch, ownProps)=> {
return ({
  updateList: (list) => dispatch(updateList(list))
  });
};

export default connect(
  null,
  mapDispatchToProps
)(editLists);
