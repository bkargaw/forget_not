import React from 'react';
import { connect } from 'react-redux';
import {login, signup, removeErrors} from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state,ownProps) => {
return({
  loggedIn: state.session.currentUser !== null,
  errors: state.session.errors,
  formType: ownProps.location.pathname
});
};

const mapDispatchToProps = (dispatch,ownProps) => {
  const processForm = ownProps.location.pathname === '/login' ? login : signup;
return ({
    processForm: (user) => dispatch(processForm(user)),
    removeErrors: () => dispatch(removeErrors())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
