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
      <Link to='/signup'><button> Sign Up </button></Link>
      <br />
      <Link to='/login'><button> Log In </button></Link>
    </div>
  );
};

export default Greeting;
