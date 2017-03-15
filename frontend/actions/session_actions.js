import * as SessionUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

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

export const logout = () => dispatch =>(
  SessionUtil.logout()
  .then(() => dispatch(receiveCurrentUser(null)),
  (err) => dispatch(receiveErrors(err)))
);


const receiveCurrentUser = (currentUser)=>({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
const receiveErrors = (errors)=>({
  type: RECEIVE_ERRORS,
  errors
});
