import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import App from './app';

import ReduxModal from 'react-redux-modal';

const Root = ({ store }) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return(
    <Provider store={ store }>
      <div>
      <Router history={ hashHistory }>
        <Route path='/' component={ App }>

        </Route>
      </Router>

      <ReduxModal />

    </div>
  </Provider>
);
};

export default Root;
