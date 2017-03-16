//  --- basic ---
export const fetchTask =(id)=>(
  $.ajax({
    url: `api/tasks/${id}`
  })
);

export const createTask =(task)=>(
  $.ajax({
    url: `api/tasks`,
    method: 'POST',
    data: {task}
  })
);
export const updatTask =(task)=>(
  $.ajax({
    url: `api/tasks/${task.id}`,
    method: 'PATCH',
    data: {task}
  })
);

export const deleteTask =(id)=>(
  $.ajax({
    url: `api/tasks/${id}`,
    method: 'DELETE',
  })
);

// ---all---
export const fetchAllTasks = ()=>(
  $.ajax({
    url: `api/tasks`
  })
);

/*
** fetch methods
---range---
fetchTodayTasks
fetchTomorrowTasks
fetchWeekTasks
fetchAllTasks
---type----
  fetchAllListsTasks
*/
export const fetchTodayTasks = ()=>(
  $.ajax({
    url: `api/tasks`,
    data: {filterOn: 'range',
           range: 'today'}
  })
);

export const fetchTomorrowTasks = ()=>(
  $.ajax({
    url: `api/tasks`,
    data: {filterOn: 'range',
           range: 'tomorrow'}
  })
);
