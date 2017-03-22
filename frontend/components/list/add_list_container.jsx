import React from 'react';
import { connect } from 'react-redux';

import AddLists from './add_list';
import {createList} from '../../actions/list_actions';


const mapDispatchToProps = dispatch => ({
  createList: (list) => dispatch(createList(list))
});

export default connect(
  null,
  mapDispatchToProps
)(AddLists);
