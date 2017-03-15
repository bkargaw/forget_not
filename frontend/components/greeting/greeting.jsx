import React from 'react';
import {Link} from 'react-router';

const Greeting = ({currentUser, logout})=>{
  if (!!currentUser){
    return (
      <div>
        <button onClick={logout}>Logout</button>
        <h3>{`Welcome, ${currentUser.username}`}</h3>
      </div>
    );
  }

  return (
    <div>
      <Link to='/signup'>Sign Up</Link>
      <br />
      <Link to='/login'> Log In</Link>
    </div>
  );
};

export default Greeting;
