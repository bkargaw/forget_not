
// title: "read The House of Mirth",
// completed: false,
// repeats: false,
// startDate: null,
// endDate: 1490025068,
// estimate: null,

export const selectTaskStat = (tasks) =>{
  let arrTasks = Object.keys(tasks).map(id => tasks[id]);
  let count = arrTasks.length;
  let todayRange = new Date(new Date().setHours(24));
  let nowRange = new Date().getTime();
  let todayCout = 0;
  let overDueCout = 0;
  let completedCount = 0;
  arrTasks.forEach( task =>{
    if (task.endDate * 1000 < nowRange) overDueCout += 1;
    if (task.endDate * 1000 < todayRange &&
        task.endDate * 1000 > nowRange) todayCout += 1;
    if (task.completed === true) completedCount += 1;
  });

  return ({completedCount, todayCout, overDueCout, count});
};
