
// ---all---
export const fetchAllTasks = ()=>(
  $.ajax({
    url: `api/tasks`
  })
);

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

// ---range---

export const fetchTodayTasks = ()=>(
  $.ajax({
    url: `api/tasks`,
    data: {filterOn: 'range',
           range: 'today'}
  })
);

export const fetchTomorrowsTasks = ()=>(
  $.ajax({
    url: `api/tasks`,
    data: {filterOn: 'range',
           range: 'tomorrow'}
  })
);

export const fetchWeekTasks = ()=>(
  $.ajax({
    url: `api/tasks`,
    data: {filterOn: 'range',
           range: 'week'}
  })
);


// ---type----
//   fetchAllListsTypeTasks
//
// export const fetchAllListsTypeTasks = listId =>(
//   $.ajax({
//     url: `api/tasks`,
//     data: {filterOn: 'type',
//           listId}
//   })
// );
