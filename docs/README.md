#forget--not

ForgetNot is a web application inspired by Remember The Milk built using Ruby on Rails and React/Redux. It should allow the user to create tasks to complete, assign various properties
to each task, add list types to tasks (to create associations)


## Features & Implementation
### login and crate

  The user will be abel to signup/login through a dialog crated using VEX
![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/wireframes/main_page%20with%20show%20task.png)

### Task Rendering and Editing Tasks
#### database
  there will be tree tables that hold the user, tasks, and notes. when the user
  first login the user table and the task table are used to grab all the tasks
  associated with the current user list-type of. will allow ajax request to come
  in to edit and delete a task.

#### front-end
  will take all task from the sore and pass them the <List container> and will
  render them(center of the page). it will show the title of each task and make the a link to edit. when they are clicked it will render <ShowTask container> to the right hand side.
  the UI will then be the same to Remember the Milk.

![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/wireframes/main_page%20with%20show%20task.png)




### Search
Searching tasks is a standard feature of Remember The Milk. I plan to utilize the Fuse.js library to create a fuzzy search of Task. This search will look go through note taskTitles.
but before going through all the task when a search is initiated i will get all the users task
to insure the all the task are in the store... (note this is because filters like Today would have shortend the task list )
