import React from 'react';
import {Link} from 'react-router';
import {modal} from 'react-redux-modal';
import sessionFormContainer from '../session/session_form_container';
import {hashHistory} from 'react-router';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }
  addModal(title) {
    return () =>(
    modal.add(sessionFormContainer, {
      title: title,
      size: 'medium', // large, medium or small,
      closeOnOutsideClick: false, // (optional) Switch to true
      // if you want to close the modal by clicking outside of it,
      hideTitleBar: false, // (optional) Switch to
      // true if do not want the default title bar and close button,
      hideCloseButton: false, // (optional) if you don't
      // wanna show the top right close button
      //.. all what you put in here you will get access in
      // the modal props ;)
    })
  );
  }



  render (){
  if (!!this.props.currentUser){
    return (
      <div className='getIn'>
        <button
          onClick={this.props.logout}>
            Logout
        </button>
      </div>
    );
  }

  return (
    <div className='getIn'>
        <button onClick={this.addModal('Signup')}>
             Sign Up
          </button>

        <button onClick={this.addModal('Login')}>
          Log In
        </button>

        <button
          className='DemoUser'
          onClick={this.props.loginWithDemo}>
          Demo User
        </button>
    </div>
  );
}
}

export default Greeting;
