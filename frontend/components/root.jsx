import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReduxModal from 'react-redux-modal';

import SessionFormContainer from './session/session_form_container';
import App from './app';
import rangeContainer from './task/range_container';
import task from './task/task';
import splashPage from './splash_Page';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _ensureLogin = (nextState, replace) =>{
    if (!store.getState().session.currentUser) replace('/');
  };

  return(
    <Provider store={ store }>
      <div>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={splashPage}/>
          <Route path='/tasks' component={ task } onEnter={_ensureLogin}>
            <Route path='/tasks/all' component={ rangeContainer }/>
            <Route path='/tasks/today' component={ rangeContainer }/>
            <Route path='/tasks/tomorrow' component={ rangeContainer }/>
            <Route path='/tasks/week' component={ rangeContainer }/>
          </Route>
        </Route>
      </Router>

      <ReduxModal />
    </div>
  </Provider>
);
};

export default Root;
