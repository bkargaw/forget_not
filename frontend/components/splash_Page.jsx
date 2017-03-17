import React from 'react';

const spalshPage=  () =>(
  <div className='splashPage'>
    <section className='splashPageMain'>
    <img className='splashPageMainImage' src='http://res.cloudinary.com/dwuzkffrk/image/upload/c_scale,q_100,r_0,w_822/v1489761837/happybackground_zdvlf9.jpg'/>
        <h1 >The smart to-do app for busy people.</h1>
        <p>stop thinking about your tasks <br/> let the app remember for you</p>
        <button>GET STARTED</button>
    </section>
    <section className='splashPageFooter'>
      <div Source>
      <img src='http://res.cloudinary.com/dwuzkffrk/image/upload/c_scale,w_71/v1489792533/git_img_tfbjbn.png'/>
      <a   href="https://github.com/bkargaw/forget_not">Source</a>
      </div>
      <div Creator>
        <img src='http://res.cloudinary.com/dwuzkffrk/image/upload/c_scale,w_68/v1489792416/Linkedin-PNG-Picture_btid2r.png'/>
      <a  className='Creator' href="https://www.linkedin.com/in/bruk-argaw-56b0039a/">About The Creator</a>
      </div>
  </section>
  </div>
);

export default spalshPage;
