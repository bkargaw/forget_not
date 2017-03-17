import React from 'react';
import { hashHistory } from 'react-router';

import GreetingContainer from './greeting/greeting_container';
import MainHeaderIcon from './greeting/header_icon';

window.MainHeaderIcon = MainHeaderIcon;
const App = ({children}) =>{
  return(
    <div className='app'>
    <header className='mainHeader'>
      <MainHeaderIcon />
      <GreetingContainer />
    </header>
    {children}
  </div>
);
};

export default App;
