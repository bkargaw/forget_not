import React from 'react';
import { connect } from 'react-redux';

import SearchForTask from './search_for_task';


const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser
  });


export default connect(
  mapStateToProps,
  null
)(SearchForTask);
