import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// test the ajax requests for the task api
import  * as TasksUtil from './util/tasks_api_util';

window.TasksUtil = TasksUtil;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if(window.currentUser){
    const preloadedState =
              {session: {currentUser: window.currentUser,
                          errors: []
                        }
              };
    store = configureStore(preloadedState);
  }else {
    store = configureStore();
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root  store={store}/>, root);
});
