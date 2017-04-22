import React from 'react';
import {modal} from 'react-redux-modal';
import sessionFormContainer from './session/session_form_container';

class spalshPage extends React.Component {
  constructor(props) {
    super(props);
    this.scrollDown = this.scrollDown.bind(this)
  }
  addModal(title) {
    let oppsitButton = title == 'Signup' ? 'Login' : 'Signup';
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
      changeform: () => {
                    this.addModal(oppsitButton);
                  }
    })
  );
  }

  scrollDown(givenTarget,e){
    let target = $('.'+ givenTarget);
       $('html, body').animate({
         scrollTop: target.offset().top
       }, 500);
  }

  render(){
    return (
      <div className='splashPage'>
        <section className='splashPageMain'>
          <div className='splashPageMainBackground'></div>
          <h4>The smart to-do app for busy people</h4>
            <button onClick={this.addModal('Signup')}>GET STARTED</button>
            <div className="bounce" onClick={()=> this.scrollDown('FoundersSection')}>
              <i className="bounce_fa fa-angle-double-down fa-3x"></i>
            </div>
        </section>

        <div className='FoundersSection'>
          <h3>Our Team</h3>
          <img id='slide'
            src='http://res.cloudinary.com/dwuzkffrk/image/upload/v1492380687/Bruk_Argaw_1_cncwfj.jpg'/>
          <h4>Bruk Argaw</h4>
          <h4>Founder, Software Developer</h4>
          <div className='fountderQuote'>
            <i className="fa fa-quote-left fa-2x" aria-hidden="true"></i>
            <p>
              I graduated from the University of California Berkeley with a BS in Civil and Environmental Engineering. Since then I changed my career and became a software developer.
              Currently I'm well versed using Ruby, React + Redux, JavaScript, and Java. I want to utilize technical skills I have learned to help improve my community and society at large.
              This is the first full stack project I have worked on and I hope users have as much fun using this site as I did creating it.
            </p>
            <i className="fa fa-quote-right fa-2x" aria-hidden="true"></i>
          </div>
        </div>

        <div></div>
        <section className='splashPageFooter'>
          <div className='Source'>
            <a  href="https://github.com/bkargaw/forget_not">
              <i className="fa fa-github fa-5x" aria-hidden="true"></i>
            </a>
          </div>
          <div className= 'Creator'>
            <a href="https://www.linkedin.com/in/bruk-argaw-56b0039a/">
                <i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i>
            </a>
          </div>
      </section>
      </div>
    );
  }
}

export default spalshPage;
