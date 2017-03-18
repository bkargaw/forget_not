import * as SessionUtil from '../util/session_api_util';
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

export const signup = (user) => dispatch =>(
  SessionUtil.signup(user)
  .then((res) => dispatch(receiveCurrentUser(res)),
  (err) => dispatch(receiveErrors(err)))
);

export const login = (user) => dispatch =>(
  SessionUtil.login(user)
  .then((res) => dispatch(receiveCurrentUser(res)),
  (err) => dispatch(receiveErrors(err)))
);

export const loginWithDemo = () => dispatch =>(
  SessionUtil.loginWithDemo()
  .then(res => {dispatch(receiveCurrentUser(res));
                hashHistory.push('/tasks');},
  (err) => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch =>(
  SessionUtil.logout()
  .then(() => {
    dispatch(receiveCurrentUser(null));
    hashHistory.push('/');
  },
  (err) => {
    dispatch(receiveErrors(err));
  })

);


const receiveCurrentUser = (currentUser)=>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors)=>({
  type: RECEIVE_ERRORS,
  errors
});
export const removeErrors = (errors)=>({
  type: REMOVE_ERRORS
});
