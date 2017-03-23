import React from 'react';
import {modal} from 'react-redux-modal';
import sessionFormContainer from './session/session_form_container';

class spalshPage extends React.Component {
  constructor(props) {
    super(props);
  }
  addModal(title) {
    let oppsitButton = title == 'Signup' ? 'Login' : 'Signup';
    return () =>(
    modal.add(sessionFormContainer, {
      title: title,
      size: 'small', // large, medium or small,
      closeOnOutsideClick: false, // (optional) Switch to true
      // if you want to close the modal by clicking outside of it,
      hideTitleBar: false, // (optional) Switch to
      // true if do not want the default title bar and close button,
      hideCloseButton: false, // (optional) if you don't
      // wanna show the top right close button
      //.. all what you put in here you will get access in
      // the modal props ;)
      changeform: () => {
                    this.addModal(oppsitButton);
                  }
    })
  );
  }
  render(){
    return (
      <div className='splashPage'>
        <section className='splashPageMain'>
          <h1>Forget--Not</h1>
            <p>stop thinking about your tasks!! let the app remember for you</p>
              <button onClick={this.addModal('Signup')}>
                   GET STARTED
                </button>
        </section>
        <section className='splashPageFooter'>
          <div className='Source'>
            <i className="fa fa-github" aria-hidden="true"></i>
            <a  href="https://github.com/bkargaw/forget_not">Source</a>
          </div>
          <div className= 'Creator'>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <a href="https://www.linkedin.com/in/bruk-argaw-56b0039a/">About The Creator</a>
          </div>
      </section>
      </div>
    );
  }
}

export default spalshPage;
