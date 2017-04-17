import React from 'react';
import { hashHistory } from 'react-router';

import GreetingContainer from './greeting/greeting_container';
import MainHeaderIcon from './greeting/header_icon';
import SearchForTask from './search/search_for_task_container';

window.MainHeaderIcon = MainHeaderIcon;
const App = ({children}) =>{
  return(
    <div className='app'>
    <header className='mainHeader'>
      <MainHeaderIcon />
      <SearchForTask />
      <GreetingContainer />
    </header>
    <div className='blankSpace'/>
    {children}
  </div>
);
};

export default App;
