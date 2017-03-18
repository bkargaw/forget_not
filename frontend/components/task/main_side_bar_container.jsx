import React from 'react';
import { connect } from 'react-redux';
import MainSideBar from './main_side_bar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(
  mapStateToProps,
  null
)(MainSideBar);
