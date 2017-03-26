import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import ReduxModal from 'react-redux-modal';

import App from './app';
import SessionFormContainer from './session/session_form_container';
import MainBodyContainer from './task/main_body_container';
import MainShowSectionContainer from './task/main_show_section_container';
import RangesContainer from './task/range_container';
import SearchContainer from './search/search_container';
import SearchShowContainer from './search/search_show_container';
import TaskShowContainer from './task/task_show_container';
import Tasks from './task/task';
import splashPage from './splash_Page';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser && nextState.location.pathname === '/') {
      replace('/tasks/1');
    }
  };

  const _ensureLogin = (nextState, replace) =>{
    if (!store.getState().session.currentUser) replace('/');
  };

  return(
    <Provider store={ store }>
      <div className='check'>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } onEnter={ _redirectIfLoggedIn }>
          <IndexRoute component={ splashPage }/>

          <Route path='/tasks' component={ Tasks } onEnter={ _ensureLogin }>
            <IndexRoute component={ MainBodyContainer }/>
            <Route path='/tasks/all' component={ RangesContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/all/:taskId'
                component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/today' component={ RangesContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/today/:taskId'
                     component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/tomorrow' component={ RangesContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/tomorrow/:taskId'
                     component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/week' component={ RangesContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/week/:taskId'
                     component={ TaskShowContainer }/>
            </Route>

            <Route path='/tasks/search/:prefix' component={ SearchContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/search/:prefix/:taskId'
                     component={ TaskShowContainer } />
            </Route>

            <Route path='/tasks/:listId' component={ RangesContainer }>
              <IndexRoute component={ MainShowSectionContainer }/>
              <Route path='/tasks/:listId/:taskId'
                    component={ SearchShowContainer } />
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
