import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReduxModal from 'react-redux-modal';

import SessionFormContainer from './session/session_form_container';
import App from './app';
import RangeContainer from './task/range_container';
import ListContainer from './lists/list_container';
import Tasks from './task/task';
import splashPage from './splash_Page';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/tasks');
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
          <Route path='/tasks' component={ Tasks } onEnter={_ensureLogin}>
            <Route path='/tasks/all' component={ RangeContainer }/>
            <Route path='/tasks/today' component={ RangeContainer }/>
            <Route path='/tasks/tomorrow' component={ RangeContainer }/>
            <Route path='/tasks/week' component={ RangeContainer }/>
            <Route path='/tasks/:listId' component={ ListContainer }/>
          </Route>
        </Route>
      </Router>

      <ReduxModal />
    </div>
  </Provider>
);
};

export default Root;
