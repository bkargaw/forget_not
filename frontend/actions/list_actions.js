import * as ListUtil from '../util/lists_api_util';

export const RECEIVE_ALL_LISTS = 'RECEIVE_ALL_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';


export const receiveAllLists = (lists) =>({
  type: RECEIVE_ALL_LISTS,
  lists
});

export const receiveList = (list) =>({
  type: RECEIVE_LIST,
  list
});
export const removeList = (list) =>({
  type: REMOVE_LIST,
  list
});


export const getAllLists = () => dispatch => (
  ListUtil.fetchAllLists()
  .then((res)=> dispatch(receiveAllLists(res)))
);

export const getList = (id) => dispatch => (
  ListUtil.fetchList(id)
  .then((res)=> dispatch(receiveList(res)))
);

export const createList = (list) => dispatch => (
  ListUtil.createList(list)
  .then((res)=> dispatch(receiveList(res)))
);

export const updateList = (list) => dispatch => (
  ListUtil.updateList(list)
  .then((res)=> dispatch(receiveList(res)))
);

export const deleteList = (id) => dispatch => (
  ListUtil.deleteList(id)
  .then((res)=> dispatch(removeList(res)))
);
