import React from 'react';
import { connect } from 'react-redux';
import {login, signup, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state,ownProps) => {
return({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors,
  formType: ownProps.title
  });
};

const mapDispatchToProps = (dispatch,ownProps) => {
  const processForm = ownProps.title === 'Login' ? login : signup;
return ({
    processForm: (user) => dispatch(processForm(user)),
    removeErrors: () => dispatch(removeErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
