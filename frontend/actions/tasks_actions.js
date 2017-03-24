import * as TaskUtil from '../util/tasks_api_util';

export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';

export const receiveAllTasks = (tasks) =>({
  type: RECEIVE_ALL_TASKS,
  tasks
});

export const receiveTask = (task) =>({
  type: RECEIVE_TASK,
  task
});

export const removeTask = (task) =>({
  type: REMOVE_TASK,
  task
});

export const getTask = (id) => dispatch => (
  TaskUtil.fetchTask(id)
  .then((res)=> dispatch(receiveTask(res)))
);

// --- edit---
export const createTask = (task) => dispatch => (
  TaskUtil.createTask(task)
  .then((res)=> dispatch(receiveTask(res)))
);

export const updateTask = (task) => dispatch => (
  TaskUtil.updateTask(task)
  .then((res)=> dispatch(receiveTask(res)))
);

export const deleteTask = (id) => dispatch => (
  TaskUtil.deleteTask(id)
  .then((res)=> dispatch(removeTask(res)))
);

// ---range---
export const getAllTasks = () => dispatch => (
  TaskUtil.fetchAllTasks()
  .then((res)=> dispatch(receiveAllTasks(res)))
);

// ---type---
export const getAllListTasks = (listId) => dispatch => (
  TaskUtil.fetchAllListsTypeTasks(listId)
  .then((res)=> dispatch(receiveAllTasks(res)))
);

export const getAllTaskForToday = () => dispatch => (
  TaskUtil.fetchTodayTasks()
  .then((res)=> dispatch(receiveAllTasks(res)))
);

export const getAllTaskForTomorrow = () => dispatch => (
  TaskUtil.fetchTomorrowsTasks()
  .then((res)=> dispatch(receiveAllTasks(res)))
);

export const getAllTaskForWeek = () => dispatch => (
  TaskUtil.fetchWeekTasks()
  .then((res)=> dispatch(receiveAllTasks(res)))
);

// ----search action -------
export const searchByTaskTitle = (prefix) => dispatch => (
  TaskUtil.searchByTaskTitle(prefix)
  .then((res)=> dispatch(receiveAllTasks(res)))
);
