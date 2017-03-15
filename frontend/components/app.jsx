import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) =>(
  <div>
    <header className='mainHeader'>
    <h1>Forger--Not</h1>
    <GreetingContainer />
    </header>
    {children}
  </div>
);

export default App;
