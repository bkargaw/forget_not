import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReduxModal from 'react-redux-modal';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import RangesContainer from './task/range_container';
import ListContainer from './lists/list_container';
import TaskShowContainer from './task/task_show_container';
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
      <div className='check'>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>
          <IndexRoute component={ splashPage}/>

          <Route path='/tasks' component={ Tasks } onEnter={ _ensureLogin }>
            
            <Route path='/tasks/all' component={ RangesContainer }>
              <Route path='/tasks/all/:taskid' component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/today' component={ RangesContainer }>
              <Route path='/tasks/today/:taskid' component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/tomorrow' component={ RangesContainer }>
              <Route path='/tasks/tomorrow/:taskid' component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/week' component={ RangesContainer }>
              <Route path='/tasks/week/:taskid' component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/:listId' component={ ListContainer }>
              <Route path='/tasks/:listId/:taskid' component={ TaskShowContainer }/>
            </Route>
          </Route>

        </Route>
      </Router>

      <ReduxModal />
    </div>
  </Provider>
);
};

export default Root;
