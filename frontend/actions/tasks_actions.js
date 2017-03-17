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

export const getAllTasks = () => dispatch => (
  TaskUtil.fetchAllTasks()
  .then((res)=> dispatch(receiveAllTasks(res)))
);

export const getTask = (id) => dispatch => (
  TaskUtil.fetchTask(id)
  .then((res)=> dispatch(receiveTask(res)))
);

// --- edit---

export const createTask = (task) => dispatch => (
  TaskUtil.createTask(task)
  .then((res)=> dispatch(receiveTask(res)))
);

export const updatTask = (task) => dispatch => (
  TaskUtil.updatTask(task)
  .then((res)=> dispatch(receiveTask(res)))
);

export const deleteTask = (id) => dispatch => (
  TaskUtil.deleteTask(id)
  .then((res)=> dispatch(removeTask(res)))
);

// ---range---

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
