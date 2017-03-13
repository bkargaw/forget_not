#ForgetNot

ForgetNot is a web application inspired by Remember The Milk built using Ruby on Rails and React/Redux. It should allow the user to create tasks to complete, assign various properties
to each task, add list types to tasks (to create associations)


## Features & Implementation

##### page when logged  out
![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/wireframes/main%20logged%20out%20.png)

### login and signup

  The user will be abel to signup/login through a modal dialog created using VEX
![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/wireframes/sign_in:up_page.jpg)

### Task Rendering and Editing Tasks

#### database
  There will be three tables that hold the user, tasks, and lists. when the user
  first login the user table and the task table are used to grab all the tasks
  associated with the current user list-type of. will allow ajax request to come
  in to edit and delete a task. default list-type will be index. will also allow
  ajax request to come in with different list-type.

#### front-end
  will take filtered tasks from the store and pass them the <List container> and will
  render them to (center of the page). it will show the title of each task and make the a link to edit. when they are clicked it will render <ShowTask container> to the right hand side.
  the UI will then be the same to Remember the Milk.

  will also allow the user to create new list types and click on them to show all the Tasks
  associated with  the list-type.

  will also allow the users to click on tabs today, tomorrow, this-week in order to render
  all the task that are due in that date rage regardless of list-type.

![alt tag](https://github.com/bkargaw/forget_not/blob/master/docs/wireframes/main_page%20with%20show%20task.png)


### Search
Searching tasks is a standard feature of Remember The Milk. I plan to utilize the Fuse.js library to create a fuzzy search of Task. This search will look go through note taskTitles.
but before going through all the task when a search is initiated i will get all the users task
to insure the all the task are in the store... (note this is because filters like Today would have shortened the task list )
